"use client";

import { sitePath } from "../content/site-path";

import { useEffect, useState } from "react";
import { projects, workPagePath, workPageSize } from "../content/projects";

const pageCount = Math.ceil(projects.length / workPageSize);

function pageFromLocation() {
  const page = Number(new URLSearchParams(window.location.search).get("page"));
  return Number.isInteger(page) && page >= 1 && page <= pageCount ? page : 1;
}

export default function Gallery() {
  const [view, setView] = useState("Gallery");
  const [page, setPage] = useState(1);
  const start = (page - 1) * workPageSize;
  const end = Math.min(start + workPageSize, projects.length);
  const range = start + 1 === end ? end : [start + 1, end].join("–");

  useEffect(() => {
    const syncPage = () => setPage(pageFromLocation());
    syncPage();
    window.addEventListener("popstate", syncPage);
    return () => window.removeEventListener("popstate", syncPage);
  }, []);

  function changePage(event, nextPage) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (nextPage === page) return;

    window.history.pushState(null, "", event.currentTarget.href);
    setPage(nextPage);
    document.getElementById("work-title").focus({ preventScroll: true });
    document.getElementById("work").scrollIntoView();
  }

  return (
    <section id="work" aria-labelledby="work-title">
      <header className="sectionhead">
        <h2 id="work-title" tabIndex={-1}>Selected work</h2>
        <fieldset className="view">
          <legend>Project view</legend>
          {["Gallery", "List"].map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={view === name}
              onClick={() => setView(name)}
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
                  href={sitePath(workPagePath(number))}
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
