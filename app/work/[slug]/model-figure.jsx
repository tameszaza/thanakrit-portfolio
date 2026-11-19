export default function ModelFigure() {
  return (
    <figure className="model-figure">
      <figcaption>How the detector checks a recording</figcaption>
      <ol className="model-route">
        <li>
          <svg viewBox="0 0 150 68" aria-hidden="true">
            <path d="M0 57H150M0 39H150M0 21H150" fill="none" stroke="var(--diagram-grid)" />
            <path d="M2 60C24 61 18 35 37 40S54 67 71 32S100 15 109 34S128 49 147 12" fill="none" stroke="var(--accent)" strokeWidth="2" />
            <path d="M2 62C25 62 21 49 39 51S60 57 71 47S95 30 108 50S130 60 147 37" fill="none" stroke="var(--accent)" opacity=".42" />
          </svg>
          <strong>Picture the sound</strong>
          <span>Show low and high sounds over time.</span>
        </li>
        <li>
          <svg viewBox="0 0 214 68" aria-hidden="true">
            <path d="M4 34H27L56 12H209M27 34L56 56H209" fill="none" stroke="var(--diagram-line)" strokeWidth="1.4" />
            <path d="M4 34H209M204 29L209 34L204 39" fill="none" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="27" cy="34" r="3" fill="var(--accent)" />
            <circle cx="112" cy="34" r="3" fill="var(--accent)" />
            <circle cx="160" cy="34" r="3" fill="var(--accent)" />
          </svg>
          <strong>Rebuild the pattern</strong>
          <span>One of seven model branches tries to match it.</span>
        </li>
        <li>
          <svg viewBox="0 0 150 68" aria-hidden="true">
            <path d="M2 51C23 52 32 18 51 20S77 50 98 40S123 18 147 27" fill="none" stroke="var(--diagram-line)" strokeWidth="2" />
            <path d="M2 51C23 52 32 18 51 20S77 49 98 47S123 45 147 40" fill="none" stroke="var(--accent)" strokeWidth="2" />
          </svg>
          <strong>Compare the two</strong>
          <span>A larger mismatch makes the recording look more unusual.</span>
        </li>
      </ol>
    </figure>
  );
}
