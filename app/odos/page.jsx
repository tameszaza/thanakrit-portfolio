import { sitePath } from "../../content/site-path";
import styles from "./odos.module.css";

export const metadata = {
  title: "ODOS in Helsinki",
  description: "Damduan Thanakrit’s 2026 ODOS digital skills programme and photos from Helsinki.",
};

const photos = [
  ["senate-square", "Senate Square", "Damduan standing in front of Helsinki Cathedral"],
  ["uspenski-cathedral", "Uspenski Cathedral", "Damduan below the red-brick Uspenski Cathedral"],
  ["oodi-library", "Oodi Central Library", "Damduan under the library’s curved timber canopy"],
  ["central-station", "Helsinki Central Station", "The station’s granite entrance arch above the Rautatieasema sign"],
  ["helsinki-tram", "A Helsinki tram", "A green and yellow tram passing people waiting at a stop"],
  ["helsinki-street", "Helsinki at dusk", "Red-brick buildings along a Helsinki street at dusk"],
];

function Photo({ name, caption, alt, lead = false }) {
  const src = sitePath(`/media/odos/${name}.webp`);

  return (
    <figure>
      <a href={src} target="_blank" rel="noreferrer" aria-label={`Open photo: ${caption}`}>
        <img src={src} alt={alt} loading={lead ? "eager" : "lazy"} />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Odos() {
  return (
    <main id="main" className="case">
      <a className="back" href={sitePath("/cv/#extracurricular")}>Extracurricular programmes</a>
      <section className={styles.intro} aria-labelledby="odos-title">
        <header>
          <small className="edition">Helsinki, Finland · 2026</small>
          <h1 id="odos-title">ODOS in Helsinki<span>.</span></h1>
          <p>I represented my district on the ODOS digital skills scholarship and completed a six-week programme at Haaga-Helia University of Applied Sciences. We studied AI, data analytics, and prototyping through applied projects.</p>
          <a className="textlink" href="https://www.haaga-helia.fi/en/current/news/unique-intensive-programme-thai-students-odos-2026">Programme at Haaga-Helia</a>
        </header>
        <Photo
          name="exploring-helsinki"
          caption="Exploring Helsinki"
          alt="Damduan taking a photo outdoors in Helsinki on a sunny day"
          lead
        />
      </section>
      <ul className={styles.photos} aria-label="Photos around Helsinki">
        {photos.map(([name, caption, alt]) => (
          <li key={name}><Photo name={name} caption={caption} alt={alt} /></li>
        ))}
      </ul>
    </main>
  );
}
