import { sitePath } from "../content/site-path";
import Gallery from "./gallery";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="name">
        <article className="intro">
          <small className="edition">First-year computer science · NTU Singapore</small>
          <h1 id="name">Damduan<br />Thanakrit<span>.</span></h1>
          <p>I build software for classrooms, neighbourhoods and a home server of my own.</p>
          <a className="worklink" href="#work">Explore the work</a>
        </article>
        <figure className="portrait">
          <img src={sitePath("/media/portrait.webp")} alt="Damduan Thanakrit" fetchPriority="high" />
        </figure>
      </section>
      <Gallery />
      <section id="about" className="about">
        <header>
          <h2>About me</h2>
          <p>I’m a first-year computer science student at NTU Singapore on an ASEAN Scholarship. I’m interested in web development, computer networks and machine learning.</p>
          <ul className="profile-links">
            <li><a className="textlink" href="https://github.com/tameszaza">GitHub</a></li>
            <li><a className="textlink" href="https://www.linkedin.com/in/thanakrit-damduan-a6a975391/">LinkedIn</a></li>
          </ul>
        </header>
        <article>
          <h3>Beyond the projects</h3>
          <dl>
            <dt>2026</dt><dd><strong><a href={sitePath("/work/sentctf/")}>SentCTF</a></strong>Third prize with Team RIPGREP at NTU.</dd>
            <dt>2026</dt><dd><strong>WorkBuddy “Age Well” hackathon</strong>Kampung Quest, AI Agent / Skills track.</dd>
            <dt>2026</dt><dd><strong>ExpresSo NB</strong>Venture Building &amp; Lab engineering intern.</dd>
            <dt>2025</dt><dd><strong>SISTEMIC</strong>Bronze for Lumineth, a voice-operated object locator for people with visual impairments.</dd>
            <dt>2025</dt><dd><strong><a href={sitePath("/high-school/#open-house")}>KVIS Open House</a></strong>Led the team behind a registration scanner for around 2,500 participants.</dd>
          </dl>
          <a className="school-link" href={sitePath("/high-school/")}>
            <img src={sitePath("/media/high-school/photography-cover.webp")} alt="" loading="lazy" />
            <span><strong>High school at KVIS</strong><small>Photo gallery · 2023–26</small></span>
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>
    </main>
  );
}
