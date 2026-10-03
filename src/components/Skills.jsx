import { useState } from "react";
import { skillGroups } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

const FILTERS = ["All", ...skillGroups.map((group) => group.category)];

function SkillGroupCard({ group }) {
  const revealRef = useReveal();
  return (
    <div className="skill-card card reveal" ref={revealRef}>
      <h3>
        <span className="skill-card__bracket">&lt;/&gt;</span> {group.category}
      </h3>
      <ul className="skill-card__tags">
        {group.skills.map((skill, index) => (
          <li key={skill} className="tag" style={{ "--tag-delay": `${index * 0.04}s` }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const [filter, setFilter] = useState("All");
  const visibleGroups =
    filter === "All" ? skillGroups : skillGroups.filter((group) => group.category === filter);

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What I Work With</span>
          <h2>Skills</h2>
        </div>

        <div className="filter-row" role="tablist" aria-label="Filter skills by category">
          {FILTERS.map((category) => (
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

        <div className="skills-grid">
          {visibleGroups.map((group) => (
            <SkillGroupCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
