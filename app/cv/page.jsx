import { sitePath } from "../../content/site-path";
export const metadata = {
  title: "CV",
  description: "Education, project work, and research by Thanakrit Damduan.",
};

export default function CV() {
  return (
    <main id="main" className="case cv">
      <a className="back" href={sitePath("/#about")}>About</a>
      <header>
        <small>Curriculum vitae</small>
        <h1>Thanakrit Damduan</h1>
        <p>Computer science · NTU Singapore</p>
      </header>
      <section aria-labelledby="education">
        <h2 id="education">Education</h2>
        <p><strong>Nanyang Technological University</strong> · Computer Science, 2026–present</p>
        <p><strong>Kamnoetvidya Science Academy</strong> · Rayong, Thailand</p>
      </section>
      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <p><strong>ExpresSo NB</strong> · Venture Building &amp; Lab engineering intern, May–July 2026</p>
        <p><strong>KVIS Student Committee</strong> · Head of IT, 2024–25. Built booking and other student services.</p>
      </section>
      <section aria-labelledby="work-cv">
        <h2 id="work-cv">Selected work</h2>
        <p><a href={sitePath("/work/kampung-quest/")}>Kampung Quest</a> · Accessibility preferences in quest chat, request performance, and production testing.</p>
        <p><a href={sitePath("/work/sleeppilot/")}>SleepPilot Coach</a> · FAQ retrieval, conversation history, embeddings, and scoring.</p>
        <p><a href={sitePath("/work/luckdee/")}>P’ Luckdee SimpleSci</a> · Django storefront, lesson video delivery, and course imagery.</p>
        <p><a href={sitePath("/work/tamestorage/")}>Tamestorage</a> · Home NAS, linked note workflows, and two-way CalDAV sync.</p>
        <p><strong>KVIS Open House</strong> · Led the registration scanner team. Designed the YOLOv8/Flask pipeline and added paper dewarping.</p>
      </section>
      <section aria-labelledby="research">
        <h2 id="research">Research and events</h2>
        <p><a href={sitePath("/work/mgans/")}>Multi-generator GANs for synthetic speech detection</a> · Equal first author, ICITEE 2025.</p>
        <p><a href={sitePath("/work/sentctf/")}>SentCTF 2026</a> · Third prize with Team RIPGREP at NTU.</p>
        <p><strong>SISTEMIC 2025</strong> · Bronze for Lumineth, a voice-operated object locator.</p>
      </section>
    </main>
  );
}
