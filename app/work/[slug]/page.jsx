import { projects, bySlug } from "../../../content/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const project = bySlug((await params).slug);
  return { title: project.name, description: project.summary };
}

export default async function Project({ params }) {
  const project = bySlug((await params).slug);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main id="main" className="case">
      <a className="back" href="/#work">All work</a>
      <header>
        <small>{project.tag}</small>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </header>
      <figure className={`plate ${project.slug}`}>
        <img src={`/media/${project.image}`} alt={project.alt} />
        <figcaption>{project.caption}</figcaption>
      </figure>
      <section className="notes">
        <h2>Project notes</h2>
        <article>
          <p>{project.body}</p>
          <small>{project.tech}</small>
          {project.url && (
            <a className="textlink" href={project.url}>{project.link || "View repository"}</a>
          )}
        </article>
      </section>
      {project.extra && (
        <figure className="secondary">
          <img src={`/media/${project.extra}`} alt={project.extraAlt} loading="lazy" />
          <figcaption>{project.extraCaption}</figcaption>
        </figure>
      )}
      <a className="nextwork" href={`/work/${next.slug}/`}>
        <small>Next project</small>{next.name}
      </a>
    </main>
  );
}
