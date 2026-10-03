import { useState } from "react";
import { FiCode, FiServer, FiCloud, FiCpu } from "react-icons/fi";
import { about, education, skillGroups } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

function findSkills(categoryName) {
  return skillGroups.find((group) => group.category === categoryName)?.skills || [];
}

const SNAPSHOT_TABS = [
  { id: "frontend", label: "Frontend", icon: FiCode, skills: findSkills("Frontend") },
  { id: "backend", label: "Backend", icon: FiServer, skills: findSkills("Backend") },
  { id: "cloud", label: "Cloud", icon: FiCloud, skills: findSkills("Cloud & DevOps") },
  { id: "ai", label: "AI / Data", icon: FiCpu, skills: findSkills("AI / ML") },
];

function About() {
  const revealRef = useReveal();
  const [activeTab, setActiveTab] = useState(SNAPSHOT_TABS[0].id);
  const activeTabData = SNAPSHOT_TABS.find((tab) => tab.id === activeTab);
  const primaryEducation = education[0];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Who I Am</span>
          <h2>About Me</h2>
        </div>

        <div className="about__grid reveal" ref={revealRef}>
          <div className="about__text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <h3>Areas of Interest</h3>
            <ul className="about__interests">
              {about.interests.map((interest) => (
                <li key={interest} className="tag">{interest}</li>
              ))}
            </ul>
          </div>

          <div className="snapshot-card card">
            <h3>Developer Snapshot</h3>
            <p className="snapshot-card__degree">{primaryEducation.degree}</p>
            <p className="snapshot-card__institution">{primaryEducation.institution}</p>
            {primaryEducation.year && <p className="snapshot-card__year">{primaryEducation.year}</p>}

            <div className="snapshot-card__tabs" role="tablist" aria-label="Skill categories">
              {SNAPSHOT_TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`snapshot-card__tab ${activeTab === tab.id ? "snapshot-card__tab--active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon size={15} /> {tab.label}
                  </button>
                );
              })}
            </div>

            <ul className="snapshot-card__skills" role="tabpanel">
              {activeTabData.skills.map((skill) => (
                <li key={skill} className="tag">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
