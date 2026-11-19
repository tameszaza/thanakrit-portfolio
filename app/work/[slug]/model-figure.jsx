export default function ModelFigure() {
  return (
    <figure className="model-figure">
      <figcaption>eD-AnoGAN inference</figcaption>
      <ol className="model-route">
        <li>
          <svg viewBox="0 0 150 68" aria-hidden="true">
            <path d="M0 57H150M0 39H150M0 21H150" fill="none" stroke="#cfcec1" />
            <path d="M2 60C24 61 18 35 37 40S54 67 71 32S100 15 109 34S128 49 147 12" fill="none" stroke="#b73713" strokeWidth="2" />
            <path d="M2 62C25 62 21 49 39 51S60 57 71 47S95 30 108 50S130 60 147 37" fill="none" stroke="#b73713" opacity=".42" />
          </svg>
          <strong>Log-mel tile</strong>
          <span>Speech input</span>
        </li>
        <li>
          <svg viewBox="0 0 214 68" aria-hidden="true">
            <path d="M4 34H27L56 12H209M27 34L56 56H209" fill="none" stroke="#b3b5aa" strokeWidth="1.4" />
            <path d="M4 34H209M204 29L209 34L204 39" fill="none" stroke="#b73713" strokeWidth="2" />
            <circle cx="27" cy="34" r="3" fill="#b73713" />
            <circle cx="112" cy="34" r="3" fill="#b73713" />
            <circle cx="160" cy="34" r="3" fill="#b73713" />
          </svg>
          <strong>Reconstruct</strong>
          <span>The classifier selects one of seven branches.</span>
        </li>
        <li>
          <svg viewBox="0 0 150 68" aria-hidden="true">
            <text x="0" y="45" fill="#b73713" fontFamily="monospace" fontSize="29">ΔX + KL</text>
          </svg>
          <strong>Anomaly score</strong>
          <span>Reconstruction error and classifier divergence.</span>
        </li>
      </ol>
    </figure>
  );
}
