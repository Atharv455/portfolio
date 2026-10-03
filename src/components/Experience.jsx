import { experience } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

function ExperienceItem({ job }) {
  const revealRef = useReveal();
  const year = job.duration.match(/\d{4}/)?.[0] || job.duration;

  return (
    <div className="timeline-item reveal" ref={revealRef}>
      <div className="timeline-item__rail">
        <span className="timeline-item__dot" />
      </div>
      <div className="timeline-item__card card">
        <span className="timeline-item__year">{year}</span>
        <h3>{job.role}</h3>
        <p className="experience-card__company">{job.company}</p>
        <p className="experience-card__duration">{job.duration}</p>
        {job.responsibilities.length > 0 && (
          <ul className="experience-card__list">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Experience() {
  const lineRef = useReveal();

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Where I've Worked</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          <span className="timeline__line reveal" ref={lineRef} aria-hidden="true" />
          {experience.map((job) => (
            <ExperienceItem key={`${job.company}-${job.duration}`} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
