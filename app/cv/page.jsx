import { sitePath } from "../../content/site-path";

export const metadata = {
  title: "CV",
  description: "Education, leadership, research, and selected honours by Thanakrit Damduan.",
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
        <p><strong>Kamnoetvidya Science Academy</strong> · 2023–26. GPA 3.99/4.00. Highest total score in the school’s Computer Learning Area.</p>
      </section>
      <section aria-labelledby="physics">
        <h2 id="physics">Physics Olympiad</h2>
        <p><strong>Thailand Physics Olympiad, 2024</strong> · National silver medal. Ranked 12th among 98 national-round competitors.</p>
        <p><strong>IPST Physics Camp, 2025</strong> · One of 17 finalists in Thailand’s final selection camp for the International Physics Olympiad.</p>
      </section>
      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <p><strong>ExpresSo NB</strong> · Venture Building &amp; Lab engineering intern, May–July 2026.</p>
      </section>
      <section aria-labelledby="leadership">
        <h2 id="leadership">Leadership and volunteering</h2>
        <p><a href={sitePath("/work/kvis-sc/")}>KVIS Student Committee</a> · Head of IT, 2024–25. Replaced the shared room-booking spreadsheet with a live calendar.</p>
        <p><strong>KVIS Open House</strong> · Led the scanner team in 2024 and 2025. Built a system that read paper registrations for around 2,500 students.</p>
        <p><strong>Give Got Grown</strong> · Co-founder and monitoring and evaluation lead, 2024–26. The team raised about US$2,400 for rehabilitation equipment and educational toys across five sites.</p>
        <p><strong>FiSym Club</strong> · Co-founder and vice president, 2023–24. Helped design the personal-finance curriculum.</p>
        <p><strong>KVIS International Science Fair</strong> · Led video and photography coverage for the five-day 2024 fair.</p>
      </section>
      <section aria-labelledby="extracurricular">
        <h2 id="extracurricular">Extracurricular programs</h2>
        <p><strong>ODOS digital skills scholarship, 2026</strong> · Sole district representative for a six-week program at Haaga-Helia University of Applied Sciences in Finland.</p>
        <p><strong>Junior Science Talent Project</strong> · Selected for the NSTDA program and mentored younger students at its 2025 selection camp.</p>
      </section>
      <section aria-labelledby="research">
        <h2 id="research">Research and selected awards</h2>
        <p><a href={sitePath("/work/mgans/")}>Multi-generator GANs for synthetic speech detection</a> · Equal first author, IEEE ICITEE 2025. The research earned regional gold at the Young Scientist Competition.</p>
        <p><strong>International Mathematical Modeling Challenge, 2025</strong> · Led a four-person team representing Thailand. International honorable mention.</p>
        <p><strong>Thailand New Gen Inventors Award, 2025</strong> · National silver and Popular Vote for a food-allergy warning tool.</p>
        <p><strong>Siriraj Mathematics and Science Aptitude Test, 2024</strong> · Second runner-up among 1,303 teams.</p>
        <p><a href={sitePath("/work/sentctf/")}>SentCTF 2026</a> · Third prize with Team RIPGREP at NTU.</p>
        <p><strong>SISTEMIC 2025</strong> · Bronze for Lumineth, a voice-operated object locator for people with visual impairments.</p>
      </section>
      <section aria-labelledby="work-cv">
        <h2 id="work-cv">Selected work</h2>
        <p><a href={sitePath("/work/kampung-quest/")}>Kampung Quest</a> · Made the activity chat remember access needs, improved its speed, and tested the live site.</p>
        <p><a href={sitePath("/work/sleeppilot/")}>SleepPilot Coach</a> · Built a chatbot that searches help articles, cites them and remembers follow-up questions.</p>
        <p><a href={sitePath("/work/luckdee/")}>P’ Luckdee SimpleSci</a> · Built a course storefront, checkout and private lesson library to sell to a friend who tutors science.</p>
        <p><a href={sitePath("/work/tamestorage/")}>Tamestorage</a> · Set up home storage and backups, searchable iPad notes and calendars that sync across devices.</p>
      </section>
    </main>
  );
}
