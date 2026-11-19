import { sitePath } from "../../content/site-path";
import styles from "./school.module.css";

export const metadata = {
  title: "High school at KVIS",
  description: "Photos from Damduan Thanakrit’s leadership and extracurricular work at KVIS, 2023–26.",
};

const stories = [
  {
    id: "open-house",
    title: "KVIS Open House",
    role: "Scanner team lead · 2024–25",
    description: "I led the team that built and ran a scanner system for paper registrations. It handled check-in for around 2,500 students.",
    photos: [
      ["open-house-station", "At the registration station", "Damduan at a laptop at the Open House registration station"],
      ["open-house-team", "The check-in team", "The check-in team working around a busy registration table"],
      ["open-house-check-in", "On the day of the event", "A team member at the visitor check-in station"],
    ],
  },
  {
    id: "give-got-grown",
    title: "Give Got Grown",
    role: "Co-founder · 2024–26",
    description: "I led monitoring and evaluation for a volunteer team that raised about US$2,400 for rehabilitation equipment and educational toys across five sites.",
    photos: [
      ["give-got-grown-team", "The team with donated toys", "Give Got Grown volunteers holding educational toys"],
      ["give-got-grown-toys", "Preparing the donations", "Damduan holding educational toys", styles.toyPortrait],
      ["give-got-grown-activity", "A group activity", "Volunteers sitting in a circle with children during an activity"],
    ],
  },
  {
    id: "mentoring",
    title: "JSTP mentoring",
    role: "Selection camp mentor · 2025",
    description: "After joining NSTDA’s Junior Science Talent Project, I returned as a mentor for younger students at its selection camp.",
    photos: [
      ["jstp-activity", "Working through the activity", "Students and mentors collaborating around a table"],
      ["jstp-group", "The group’s poster", "Camp participants showing a poster they made"],
      ["jstp-mentor", "At the camp", "Damduan seated at one of the activity tables"],
    ],
  },
  {
    id: "animation",
    title: "Animators’ Tournament Club",
    role: "Founder and president · 2024–25",
    description: "I started the club, planned its lessons and taught Blender basics and lighting to seven students.",
    photos: [
      ["animation-club", "A club lesson", "Students in a classroom during an animation club lesson"],
      ["animation-practice", "Practising in Blender", "Animation club members working at computers"],
    ],
  },
  {
    id: "photography",
    title: "School photography",
    role: "Photo and video lead · 2024",
    description: "I led photo and video coverage of the five-day KVIS International Science Fair and photographed other school events.",
    photos: [
      ["photography-cover", "Behind the camera", "Damduan sitting outdoors with a camera"],
      ["photography-crew", "School photo and video crew", "Group portrait of the school photo and video crew"],
      ["photography-event", "Photographing a school event", "Damduan taking photos at a school event"],
    ],
  },
];

function photoPath(name) {
  return sitePath(`/media/high-school/${name}.webp`);
}

export default function HighSchool() {
  return (
    <main id="main" className={`case ${styles.school}`}>
      <a className="back" href={sitePath("/#about")}>About</a>
      <header>
        <small className="edition">KVIS · 2023–26</small>
        <h1>High school<span>.</span></h1>
        <p>Leadership, volunteering and creative work at Kamnoetvidya Science Academy.</p>
      </header>
      <nav className={styles.index} aria-label="High school activities">
        <ul>
          {stories.map(({ id, title, photos: [[name]] }) => (
            <li key={id}>
              <a href={`#${id}`}>
                <img src={photoPath(name)} alt="" />
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {stories.map(({ id, title, role, description, photos }) => (
        <section
          key={id}
          id={id}
          className={styles.story}
          aria-labelledby={`${id}-title`}
        >
          <header>
            <small>{role}</small>
            <h2 id={`${id}-title`}>{title}</h2>
            <p>{description}</p>
          </header>
          <ul className={styles.photos}>
            {photos.map(([name, caption, alt, crop]) => (
              <li key={name}>
                <figure>
                  <a href={photoPath(name)} target="_blank" rel="noreferrer" aria-label={`Open photo: ${caption}`}>
                    <img src={photoPath(name)} alt={alt} className={crop} loading="lazy" />
                  </a>
                  <figcaption>{caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
