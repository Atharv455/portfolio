import { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const CATEGORIES = ["All", ...new Set(projects.map((project) => project.category))];

function Projects() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What I've Built</span>
          <h2>Projects</h2>
        </div>

        <div className="filter-row" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              className={`filter-chip ${filter === category ? "filter-chip--active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
