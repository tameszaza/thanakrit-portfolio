# Damduan Thanakrit’s portfolio

A Next.js static site published on [GitHub Pages](https://tameszaza.github.io/thanakrit-portfolio/). GitHub Actions builds and publishes pushes to `main` using `.github/workflows/pages.yml`.

## Local build

Use Node.js 22. Run `npm ci` and `npm run build` from the checkout. Next.js writes the static site to `out/`. The Pages workflow supplies `NEXT_PUBLIC_BASE_PATH` for the public URL.

## Update the portfolio

Project summaries and cover images are defined in `content/projects.js`. Project introductions and showcase images are defined in `content/journeys.js`. Add new images under `public/media/` and include a caption and alternative text. The home page and CV live in `app/page.jsx` and `app/cv/page.jsx`.
