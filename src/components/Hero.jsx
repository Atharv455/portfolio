import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { personal } from "../data/portfolioData";
import HeroWorkspace from "./HeroWorkspace";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">Hi, I'm</span>
          <h1 className="hero__name">{personal.name}</h1>
          <p className="hero__title">{personal.title}</p>
          <p className="hero__intro">{personal.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight className="btn__arrow" size={16} />
            </a>
            <a href={personal.resumePath} download className="btn btn-outline">Download Resume</a>
          </div>

          <div className="hero__social">
            {personal.github && (
              <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
            )}
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
            )}
            {personal.email && (
              <a href={`mailto:${personal.email}`} aria-label="Email">
                <FiMail size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="hero__visual">
          <HeroWorkspace />
        </div>
      </div>
    </section>
  );
}

export default Hero;
