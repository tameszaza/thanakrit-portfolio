import { sitePath } from "../../content/site-path";

export const metadata = {
  title: "CV",
  description: "Education, leadership, research, and selected honours by Damduan Thanakrit.",
};

function CvSection({ id, title, children }) {
  return (
    <section className="cv-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <ul>{children}</ul>
    </section>
  );
}

function Entry({ title, href, children }) {
  return (
    <li className="cv-entry">
      <h3>{href ? <a href={sitePath(href)}>{title}</a> : title}</h3>
      <p>{children}</p>
    </li>
  );
}

export default function CV() {
  return (
    <main id="main" className="case cv">
      <header>
        <small>Curriculum vitae</small>
        <h1>Damduan Thanakrit</h1>
        <p>First-year computer science · NTU Singapore</p>
      </header>
      <section className="cv-grid" aria-label="CV details">
        <article>
          <CvSection id="education" title="Education">
            <Entry title="Nanyang Technological University">Computer Science, 2026–present. ASEAN Scholarship.</Entry>
            <Entry title="Kamnoetvidya Science Academy" href="/high-school/">2023–26. GPA 3.99/4.00. Highest total score in the school’s Computer Learning Area.</Entry>
          </CvSection>
          <CvSection id="physics" title="Physics Olympiad">
            <Entry title="Thailand Physics Olympiad, 2024">National silver medal. Ranked 12th among 98 national-round competitors.</Entry>
            <Entry title="IPST Physics Camp, 2025">One of 17 finalists in Thailand’s final selection camp for the International Physics Olympiad.</Entry>
          </CvSection>
          <CvSection id="research" title="Research and awards">
            <Entry title="Multi-generator GANs for synthetic speech detection" href="/work/mgans/">
              Equal first author, IEEE ICITEE 2025. Regional gold at the Young Scientist Competition.
            </Entry>
            <Entry title="International Mathematical Modeling Challenge, 2025">
              Led a four-person team representing Thailand. International honorable mention.
            </Entry>
            <Entry title="Thailand New Gen Inventors Award, 2025" href="/work/food-allergen/">National silver and Popular Vote for a food-allergy warning tool.</Entry>
            <Entry title="Siriraj Mathematics and Science Aptitude Test, 2024">Second runner-up among 1,303 teams.</Entry>
            <Entry title="SentCTF 2026" href="/work/sentctf/">Third prize with Team RIPGREP at NTU.</Entry>
            <Entry title="SISTEMIC 2025" href="/work/lumineth/">Bronze for Lumineth, a voice-operated object locator for people with visual impairments.</Entry>
          </CvSection>
          <CvSection id="extracurricular" title="Extracurricular programs">
            <Entry title="ODOS digital skills scholarship, 2026">
              Sole district representative for a six-week program at Haaga-Helia University of Applied Sciences in Finland.
            </Entry>
            <Entry title="Junior Science Talent Project" href="/high-school/#mentoring">
              Selected for the NSTDA program and mentored younger students at its 2025 selection camp.
            </Entry>
          </CvSection>
        </article>
        <article>
          <CvSection id="experience" title="Experience">
            <Entry title="ExpresSo NB">Venture Building &amp; Lab engineering intern, May–July 2026.</Entry>
          </CvSection>
          <CvSection id="leadership" title="Leadership and volunteering">
            <Entry title="KVIS Student Committee" href="/work/kvis-sc/">
              Head of IT, 2024–25. Replaced the shared room-booking spreadsheet with a live calendar.
            </Entry>
            <Entry title="KVIS Open House" href="/high-school/#open-house">
              Led the scanner team in 2024 and 2025. Built a system that read paper registrations for around 2,500 students.
            </Entry>
            <Entry title="Give Got Grown" href="/high-school/#give-got-grown">
              Co-founder and monitoring and evaluation lead, 2024–26. The team raised about US$2,400 for rehabilitation equipment and educational toys across five sites.
            </Entry>
            <Entry title="FiSym Club">Co-founder and vice president, 2023–24. Helped design the personal-finance curriculum.</Entry>
            <Entry title="KVIS International Science Fair" href="/high-school/#photography">Led video and photography coverage for the five-day 2024 fair.</Entry>
          </CvSection>
          <CvSection id="work-cv" title="Selected work">
            <Entry title="Kampung Quest" href="/work/kampung-quest/">Added accessibility preferences to the activity chat and improved its speed.</Entry>
            <Entry title="SleepPilot Coach" href="/work/sleeppilot/">Built a support chatbot that looks up and cites help articles.</Entry>
            <Entry title="P’ Luckdee SimpleSci" href="/work/luckdee/">Built a course storefront and private lessons to sell to a tutor friend.</Entry>
            <Entry title="GO-KILA" href="/work/gokila/">Built the backend for location-based sports matching and live team chat.</Entry>
            <Entry title="Tamestorage" href="/work/tamestorage/">Built home storage, backups, searchable iPad notes and calendar sync.</Entry>
          </CvSection>
        </article>
      </section>
    </main>
  );
}
