import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Education.css";

function EducationItem({ entry, isLast }) {
  const revealRef = useReveal();
  return (
    <div className="edu-timeline reveal" ref={revealRef}>
      <div className="edu-timeline__rail">
        <span className="edu-timeline__dot">
          <FiBookOpen size={16} />
        </span>
        {!isLast && <span className="edu-timeline__stub" aria-hidden="true" />}
      </div>
      <div className="education-card card">
        <h3>{entry.degree}</h3>
        <p className="education-card__institution">{entry.institution}</p>
        <div className="education-card__meta">
          {entry.year && <span className="education-card__year">{entry.year}</span>}
          {entry.score && <span className="education-card__score">Score: {entry.score}</span>}
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Academic Background</span>
          <h2>Education</h2>
        </div>

        <div className="edu-timeline-list">
          {education.map((entry, index) => (
            <EducationItem key={entry.degree} entry={entry} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
