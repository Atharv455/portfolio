import { useEffect, useRef, useState } from "react";
import { personal } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const linkRefs = useRef({});
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function updateIndicator() {
      if (menuOpen || window.innerWidth <= 900) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }
      const el = linkRefs.current[activeId];
      if (el) {
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
      }
    }
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeId, menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          AK<span>.</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              ref={(el) => {
                linkRefs.current[link.id] = el;
              }}
              href={`#${link.id}`}
              onClick={closeMenu}
              aria-current={activeId === link.id ? "true" : undefined}
              className={activeId === link.id ? "navbar__link navbar__link--active" : "navbar__link"}
            >
              {link.label}
            </a>
          ))}
          <span
            className="navbar__indicator"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
              opacity: indicator.visible ? 1 : 0,
            }}
            aria-hidden="true"
          />
          <a
            href={personal.resumePath}
            download
            onClick={closeMenu}
            className="btn btn-outline btn-sm navbar__resume"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
