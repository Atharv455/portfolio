import { useState } from "react";
import "./TerminalCard.css";

// Skills shown here are pulled directly from the real skill list in
// portfolioData.js (Frontend/Programming/Backend/Database/Cloud groups) -
// nothing invented, just a representative subset for the terminal display.
const DISPLAY_SKILLS = ["React.js", "Java", "Spring Boot", "Firebase Firestore", "AWS"];

function TerminalCard() {
  const [whoamiExpanded, setWhoamiExpanded] = useState(false);
  const [statusReady, setStatusReady] = useState(false);

  return (
    <div className="terminal-card" role="group" aria-label="Terminal showing a quick developer profile summary">
      <div className="terminal-card__titlebar">
        <span className="terminal-card__dot terminal-card__dot--red" />
        <span className="terminal-card__dot terminal-card__dot--yellow" />
        <span className="terminal-card__dot terminal-card__dot--green" />
      </div>

      <div className="terminal-card__body">
        <button
          type="button"
          className="terminal-card__line terminal-card__line--clickable"
          style={{ "--delay": "0.1s" }}
          onClick={() => setWhoamiExpanded((v) => !v)}
          aria-expanded={whoamiExpanded}
        >
          <span className="terminal-card__prompt">$</span> whoami
        </button>
        <p className="terminal-card__line terminal-card__output" style={{ "--delay": "0.3s" }}>
          atharv@developer
        </p>
        {whoamiExpanded && (
          <p className="terminal-card__line terminal-card__output terminal-card__detail">
            B.Tech CSE student &middot; open to internships
          </p>
        )}

        <p className="terminal-card__line" style={{ "--delay": "0.55s" }}>
          <span className="terminal-card__prompt">$</span> skills
        </p>
        {DISPLAY_SKILLS.map((skill, index) => (
          <p
            key={skill}
            className="terminal-card__line terminal-card__output terminal-card__skill"
            style={{ "--delay": `${0.75 + index * 0.15}s` }}
          >
            {skill}
          </p>
        ))}

        <p className="terminal-card__line" style={{ "--delay": "1.6s" }}>
          <span className="terminal-card__prompt">$</span> status
        </p>
        <button
          type="button"
          className="terminal-card__line terminal-card__output terminal-card__line--clickable"
          style={{ "--delay": "1.8s" }}
          onClick={() => setStatusReady((v) => !v)}
        >
          <span className="terminal-card__status-dot" /> {statusReady ? "System ready" : "Portfolio active"}
        </button>

        <p className="terminal-card__line terminal-card__cursor-line" style={{ "--delay": "2s" }}>
          <span className="terminal-card__prompt">$</span>
          <span className="terminal-card__cursor" />
        </p>
      </div>
    </div>
  );
}

export default TerminalCard;
