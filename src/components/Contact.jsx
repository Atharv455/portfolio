import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personal } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

function Contact() {
  const revealRef = useReveal();

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Get In Touch</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-card card reveal" ref={revealRef}>
          <p className="contact-card__intro">
            I'm open to internship and entry-level opportunities in full-stack and cloud development.
            Feel free to reach out.
          </p>

          <div className="contact-buttons">
            {personal.email ? (
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                <FiMail size={17} /> Email Me
              </a>
            ) : (
              <button type="button" className="btn btn-primary" disabled>
                <FiMail size={17} /> Email not yet added
              </button>
            )}

            {personal.linkedin ? (
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FiLinkedin size={17} /> LinkedIn
              </a>
            ) : (
              <button type="button" className="btn btn-outline" disabled>
                <FiLinkedin size={17} /> LinkedIn not yet added
              </button>
            )}

            {personal.github && (
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FiGithub size={17} /> GitHub
              </a>
            )}
          </div>

          <a href={personal.resumePath} download className="contact-card__resume-link link-underline">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
