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

function Frame({ frame, className = "", lead = false }) {
  return (
    <figure className={className}>
      <a href={sitePath(`/media/${frame.image}`)} target="_blank" rel="noreferrer" aria-label={`Open image in a new tab: ${frame.alt}`}>
        <img src={sitePath(`/media/${frame.image}`)} alt={frame.alt} loading={lead ? "eager" : "lazy"} />
      </a>
      <figcaption>{frame.caption}</figcaption>
    </figure>
  );
}

function Process({ flow }) {
  return (
    <figure className="process">
      <figcaption>{flow.caption}</figcaption>
      <ol>
        {flow.steps.map(([step, detail]) => (
          <li key={step}>
            <strong>{step}</strong>
            <small>{detail}</small>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default async function Project({ params }) {
  const project = bySlug((await params).slug);
  const journey = journeys[project.slug];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main id="main" className="case">
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
      <section className={`journey ${project.slug}`} aria-label="Project journey">
        {project.slug === "mgans" && <ModelFigure />}
        {journey.flow && <Process flow={journey.flow} />}
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
