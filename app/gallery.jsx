"use client";

import { useState } from "react";
import { projects } from "../content/projects";

export default function Gallery() {
  const [view, setView] = useState("Gallery");

  return (
    <section id="work" aria-labelledby="work-title">
      <header className="sectionhead">
        <h2 id="work-title">Selected work</h2>
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
        {projects.map((project) => (
          <li key={project.slug}>
            <a className="project" href={`/work/${project.slug}/`}>
              <figure className={`cover ${project.slug}`}>
                <img src={`/media/${project.image}`} loading="lazy" alt="" />
              </figure>
              <header>
                <h3>{project.name}</h3>
                <small>{project.tag}</small>
              </header>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
