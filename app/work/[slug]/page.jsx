import { sitePath } from "../../../content/site-path";
import { projects, bySlug } from "../../../content/projects";
import { journeys } from "../../../content/journeys";
import ModelFigure from "./model-figure";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const project = bySlug((await params).slug);
  return { title: project.name, description: project.summary };
}

function frameId(frame) {
  return `view-${frame.image.slice(0, frame.image.lastIndexOf("."))}`;
}

function ShowcaseIndex({ project, frames }) {
  return (
    <nav className="showcase-index" aria-label={`${project.name} showcase views`}>
      <ul>
        {[project, ...frames].map((frame) => (
          <li key={frame.image}>
            <a href={`#${frameId(frame)}`}>
              <img src={sitePath(`/media/${frame.image}`)} alt="" loading="lazy" />
              <span>{frame.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Frame({ frame, className = "", lead = false }) {
  return (
    <figure id={frameId(frame)} className={className}>
      <a href={sitePath(`/media/${frame.image}`)} target="_blank" rel="noreferrer" aria-label={`Open image in a new tab: ${frame.alt}`}>
        <img src={sitePath(`/media/${frame.image}`)} alt={frame.alt} loading={lead ? "eager" : "lazy"} />
      </a>
      <figcaption>{frame.caption}</figcaption>
    </figure>
  );
}

export default async function Project({ params }) {
  const project = bySlug((await params).slug);
  const journey = journeys[project.slug];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main id="main" className="case" data-project={project.slug}>
      <a className="back" href={sitePath("/#work")}>All work</a>
      <header>
        <small>{project.tag}</small>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </header>
      <Frame frame={project} className={`plate ${project.slug}`} lead />
      <aside className="contribution" aria-label="My contribution">
        <small>My part</small>
        <p>{journey.role}</p>
        {project.url && (
          <a className="textlink" href={project.url}>{project.link || "View repository"}</a>
        )}
      </aside>
      {project.citation && (
        <details className="publication">
          <summary>Publication details</summary>
          <p>{project.citation}</p>
        </details>
      )}
      <ShowcaseIndex project={project} frames={journey.frames} />
      <section className={`journey ${project.slug}`} aria-label="Project journey">
        {project.slug === "mgans" && <ModelFigure />}
        {journey.frames.map((frame) => (
          <Frame
            key={frame.image}
            frame={frame}
            className={`journey-frame${frame.wide ? " wide" : ""}${frame.portrait ? " portrait-frame" : ""}`}
          />
        ))}
      </section>
      <a className="nextwork" href={sitePath(`/work/${next.slug}/`)}>
        <small>Next project</small>{next.name}
      </a>
    </main>
  );
}
