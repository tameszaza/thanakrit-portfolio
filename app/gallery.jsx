"use client";

import { sitePath } from "../content/site-path";

import { useEffect, useState } from "react";
import { projects, workPagePath, workPageSize } from "../content/projects";

const pageSizes = { Gallery: workPageSize, List: 15 };

function workFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view") === "list" ? "List" : "Gallery";
  const requestedPage = Number(params.get("page"));
  const pageCount = Math.ceil(projects.length / pageSizes[view]);
  const page = Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= pageCount
    ? requestedPage
    : 1;
  return { view, page };
}

export default function Gallery() {
  const [{ view, page }, setWork] = useState({ view: "Gallery", page: 1 });
  const pageSize = pageSizes[view];
  const pageCount = Math.ceil(projects.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, projects.length);
  const range = start + 1 === end ? end : [start + 1, end].join("–");

  useEffect(() => {
    const syncWork = () => setWork(workFromLocation());
    syncWork();
    window.addEventListener("popstate", syncWork);
    return () => window.removeEventListener("popstate", syncWork);
  }, []);

  function changeView(nextView) {
    if (nextView === view) return;

    const nextPage = Math.floor(start / pageSizes[nextView]) + 1;
    window.history.pushState(null, "", sitePath(workPagePath(nextPage, nextView)));
    setWork({ view: nextView, page: nextPage });
  }

  function changePage(event, nextPage) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (nextPage === page) return;

    window.history.pushState(null, "", event.currentTarget.href);
    setWork({ view, page: nextPage });
    document.getElementById("work-title").focus({ preventScroll: true });
    document.getElementById("work").scrollIntoView();
  }

  return (
    <section id="work" aria-labelledby="work-title">
      <header className="sectionhead">
        <h2 id="work-title" tabIndex={-1}>Selected work</h2>
        <fieldset className="view">
          <legend>Project view</legend>
          {Object.keys(pageSizes).map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={view === name}
              onClick={() => changeView(name)}
            >
              {name}
            </button>
          ))}
        </fieldset>
      </header>
      <ul className={view === "List" ? "catalog list" : "catalog"}>
        {projects.slice(start, end).map((project) => (
          <li key={project.slug}>
            <a className="project" href={sitePath(`/work/${project.slug}/`)}>
              <figure className={`cover ${project.slug}`}>
                <img src={sitePath(`/media/${project.image}`)} loading="lazy" alt="" />
              </figure>
              <header>
                <h3>{project.name}</h3>
                <small>{project.tag}</small>
              </header>
            </a>
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <nav className="work-pagination" aria-label="Selected work pages">
          <p role="status">{range} of {projects.length} projects</p>
          <ul>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
              <li key={number}>
                <a
                  href={sitePath(workPagePath(number, view))}
                  aria-label={`Page ${number}`}
                  aria-current={page === number ? "page" : undefined}
                  onClick={(event) => changePage(event, number)}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
}
