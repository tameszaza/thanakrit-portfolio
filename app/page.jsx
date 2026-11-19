import { sitePath } from "../content/site-path";
import Gallery from "./gallery";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="name">
        <article className="intro">
          <small className="edition">Computer science · NTU Singapore</small>
          <h1 id="name">Damduan<br />Thanakrit<span>.</span></h1>
          <p>I build software for classrooms, neighbourhoods and a home server of my own.</p>
          <a className="worklink" href="#work">Explore the work</a>
        </article>
        <figure className="portrait">
          <img src={sitePath("/media/portrait.webp")} alt="Damduan Thanakrit" fetchPriority="high" />
          <figcaption>KVIS, Rayong</figcaption>
        </figure>
      </section>
      <Gallery />
      <section id="about" className="about">
        <header>
          <small>About me</small>
          <h2>From Rayong<br /> to Singapore<span>.</span></h2>
          <p>I led the student committee’s IT team at KVIS in Thailand before moving to Singapore to study computer science.</p>
          <a className="textlink" href="https://github.com/tameszaza">My GitHub</a>
        </header>
        <article>
          <h3>Beyond the projects</h3>
          <dl>
            <dt>2026</dt><dd><strong><a href={sitePath("/work/sentctf/")}>SentCTF</a></strong>Third prize with Team RIPGREP at NTU.</dd>
            <dt>2026</dt><dd><strong>WorkBuddy “Age Well” hackathon</strong>Kampung Quest, AI Agent / Skills track.</dd>
            <dt>2026</dt><dd><strong>ExpresSo NB</strong>Venture Building &amp; Lab engineering intern.</dd>
            <dt>2025</dt><dd><strong>SISTEMIC</strong>Bronze for Lumineth, a voice-operated object locator for people with visual impairments.</dd>
            <dt>2025</dt><dd><strong>KVIS Open House</strong>Led the team behind a registration scanner for around 2,500 participants.</dd>
          </dl>
        </article>
      </section>
    </main>
  );
}
