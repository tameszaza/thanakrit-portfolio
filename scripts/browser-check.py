"""Run against the built site from a server-side Playwright environment."""
import os
from pathlib import Path

from playwright.sync_api import sync_playwright

origin = os.getenv("PORTFOLIO_ORIGIN", "http://127.0.0.1:8787")
out = Path(os.getenv("PORTFOLIO_QA", "/qa"))
out.mkdir(exist_ok=True)

with sync_playwright() as runner:
    browser = runner.chromium.launch(
        args=[
            "--disable-dev-shm-usage", "--no-sandbox", "--renderer-process-limit=1",
            "--no-zygote", "--single-process", "--disable-gpu",
        ]
    )
    page = browser.new_page(viewport={"width": 1440, "height": 960})
    page.set_default_timeout(60000)
    page.set_default_navigation_timeout(90000)
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on("response", lambda response: errors.append(f"{response.status}: {response.url}")
            if response.status >= 400 and response.url.startswith(origin) else None)

    def check_layout():
        page.evaluate("""async () => {
          await document.fonts.ready;
          await Promise.all([...document.images].map(async image => {
            image.loading = 'eager';
            await image.decode();
          }));
        }""")
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), page.url

    assert page.goto(origin, wait_until="networkidle").status == 200
    assert page.title().startswith("Thanakrit")
    assert page.locator("h1").count() == 1
    projects = page.locator(".project")
    assert projects.count() == 6
    paths = projects.evaluate_all("links => links.map(link => link.getAttribute('href'))")
    for width in (320, 390, 768, 1024, 1440):
        page.set_viewport_size({"width": width, "height": 960})
        check_layout()
        if width in (390, 1440):
            page.screenshot(path=out / f"home-{width}.png", full_page=True, timeout=60000)
    page.get_by_role("button", name="List", exact=True).focus()
    page.keyboard.press("Enter")
    assert page.get_by_role("button", name="List", exact=True).get_attribute("aria-pressed") == "true"
    assert page.locator(".catalog.list").count() == 1
    page.get_by_role("button", name="Gallery", exact=True).click()
    assert page.locator(".catalog.list").count() == 0
    page.get_by_role("link", name="About", exact=True).click()
    assert page.evaluate("location.hash") == "#about"
    assert page.get_by_role("link", name="Email", exact=True).get_attribute("href").startswith("mailto:")

    page.get_by_role("link", name="Work", exact=True).click()
    assert page.evaluate("location.hash") == "#work"
    projects.first.click()
    for index, path in enumerate(paths):
        page.wait_for_url(f"{origin}{path}", wait_until="networkidle")
        assert page.locator("h1").count() == 1
        assert page.locator(".nextwork").get_attribute("href") == paths[(index + 1) % len(paths)]
        for width in (390, 1440):
            page.set_viewport_size({"width": width, "height": 960})
            check_layout()
        if path in ("/work/tamestorage/", "/work/kvis-sc/"):
            page.screenshot(path=out / f"{path.split('/')[2]}.png", full_page=True)
        page.locator(".nextwork").click()
    page.get_by_role("link", name="All work", exact=True).click()
    page.wait_for_url(f"{origin}/#work")
    assert not errors, errors
    missing = page.goto(f"{origin}/missing-page/")
    assert missing.status == 404
    assert page.get_by_role("heading", name="Page not found.").is_visible()
    print("Passed: 5 home widths, 6 projects at 2 widths, assets, keyboard controls, navigation and 404.", flush=True)

    if os.getenv("PORTFOLIO_CAPTURE_NAS") == "1":
        page.set_viewport_size({"width": 1440, "height": 920})
        overview = page.goto("http://127.0.0.1:5000/introduction", wait_until="domcontentloaded")
        assert overview.status == 200
        page.get_by_text("Your digital life, in one place.", exact=False).first.wait_for()
        page.screenshot(path=out / "tamestorage.png", timeout=60000)
        print("Captured the public-facing Tamestorage introduction screen.", flush=True)
