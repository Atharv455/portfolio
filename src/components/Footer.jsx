import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { personal } from "../data/portfolioData";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" onClick={scrollToTop}>
            AK<span>.</span>
          </a>
          <p>{personal.name}</p>
          <p className="footer__tagline">Full Stack Developer | Cloud &amp; AI Enthusiast</p>
        </div>

        <div className="footer__links">
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
          )}
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
          )}
          {personal.email && (
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <FiMail size={18} />
            </a>
          )}
          <a href={personal.resumePath} download className="footer__resume">Resume</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {personal.name}. All rights reserved.</p>
        <button type="button" className="footer__top-btn" onClick={scrollToTop}>
          Back to top <FiArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
