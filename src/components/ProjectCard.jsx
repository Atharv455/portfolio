import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiChevronRight, FiX, FiLayers } from "react-icons/fi";
import { useReveal } from "../hooks/useReveal";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const revealRef = useReveal();
  const [showDetails, setShowDetails] = useState(false);
  const hasDetails = project.features?.length > 0 || project.event || project.architecture?.length > 0;
  const initial = project.name.charAt(0);

  useEffect(() => {
    if (!showDetails) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") setShowDetails(false);
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showDetails]);

  return (
    <>
      <article className={`project-card card reveal ${project.featured ? "project-card--featured" : ""}`} ref={revealRef}>
        <div className="project-card__visual">
          <span className="project-card__initial" aria-hidden="true">{initial}</span>
          <div className="project-card__overlay">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" onClick={(e) => e.stopPropagation()}>
                <FiExternalLink size={15} /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" onClick={(e) => e.stopPropagation()}>
                <FiGithub size={15} /> GitHub
              </a>
            )}
          </div>
        </div>

        <div className="project-card__body">
          {project.featured && <span className="project-card__featured-badge">Featured Project</span>}
          <h3>{project.name}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
          <p className="project-card__description">{project.description}</p>

          {project.team && (
            <p className="project-card__meta">
              Team: {project.team} &middot; {project.rank}
            </p>
          )}

          {project.techStack.length > 0 && (
            <ul className="project-card__tags">
              {project.techStack.map((tech) => (
                <li key={tech} className="tag">{tech}</li>
              ))}
            </ul>
          )}

          <div className="project-card__actions">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <FiExternalLink size={15} /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <FiGithub size={15} /> GitHub
              </a>
            )}
            {hasDetails && (
              <button type="button" className="project-card__details-btn" onClick={() => setShowDetails(true)}>
                View Details <FiChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
      </article>

      {showDetails && (
        <div className="project-modal-overlay" onClick={() => setShowDetails(false)}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="project-modal__close" onClick={() => setShowDetails(false)} aria-label="Close">
              <FiX size={20} />
            </button>
            <h3 id="project-modal-title">{project.name}</h3>
            <p className="project-card__tagline">{project.tagline}</p>

            {project.event && (
              <p className="project-card__meta">
                {project.event}
                {project.team && <> &middot; Team: {project.team}</>}
                {project.rank && <> &middot; {project.rank}</>}
              </p>
            )}

            <p className="project-card__description">{project.description}</p>

            {project.techStack.length > 0 && (
              <>
                <h4>Technology Stack</h4>
                <ul className="project-card__tags">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="tag">{tech}</li>
                  ))}
                </ul>
              </>
            )}

            {project.features?.length > 0 && (
              <>
                <h4>Features</h4>
                <ul className="project-modal__features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {project.architecture?.length > 0 && (
              <>
                <h4><FiLayers size={14} /> Architecture / Flow</h4>
                <ol className="project-modal__architecture">
                  {project.architecture.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </>
            )}

            <div className="project-card__actions">
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  <FiExternalLink size={15} /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <FiGithub size={15} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
