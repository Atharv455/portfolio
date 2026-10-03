import { useEffect, useRef, useState } from "react";
import { SiReact, SiFirebase, SiJavascript } from "react-icons/si";
import { FiCloud } from "react-icons/fi";
import { usePrefersReducedMotion, useIsTouchDevice } from "../hooks/useMediaCapability";
import TerminalCard from "./TerminalCard";
import "./HeroWorkspace.css";

// Matches the real skills already shown in the terminal / Skills section -
// not a new or different list, just rendered as floating badges here.
const TECH_BADGES = [
  { id: "react", label: "React.js", Icon: SiReact, style: { top: "-6%", left: "-10%" } },
  { id: "javascript", label: "JavaScript", Icon: SiJavascript, style: { top: "8%", right: "-12%" } },
  { id: "firebase", label: "Firebase", Icon: SiFirebase, style: { bottom: "6%", left: "-12%" } },
  { id: "aws", label: "AWS", Icon: FiCloud, style: { bottom: "-6%", right: "-8%" } },
];

const PARTICLES = [
  { left: "6%", top: "18%", delay: "0s", duration: "7s" },
  { left: "88%", top: "28%", delay: "1.2s", duration: "8.5s" },
  { left: "14%", top: "78%", delay: "2.1s", duration: "6.5s" },
  { left: "80%", top: "82%", delay: "0.6s", duration: "9s" },
  { left: "50%", top: "4%", delay: "1.8s", duration: "7.5s" },
];

function TechBadge({ badge, parallaxStrength }) {
  const [revealed, setRevealed] = useState(false);
  const Icon = badge.Icon;

  return (
    <button
      type="button"
      className={`hero-workspace__badge ${revealed ? "hero-workspace__badge--revealed" : ""}`}
      style={{ ...badge.style, "--parallax": parallaxStrength }}
      onClick={() => setRevealed((v) => !v)}
      aria-pressed={revealed}
      aria-label={badge.label}
    >
      <Icon size={18} />
      <span className="hero-workspace__badge-label">{badge.label}</span>
    </button>
  );
}

function HeroWorkspace() {
  const wrapperRef = useRef(null);
  const tiltRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const parallaxEnabled = !reducedMotion && !isTouch;

  useEffect(() => {
    if (!parallaxEnabled) return;
    const wrapper = wrapperRef.current;
    const tilt = tiltRef.current;
    if (!wrapper || !tilt) return;

    let frame = null;

    function handleMouseMove(event) {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (event.clientX - centerX) / (rect.width / 2);
      const deltaY = (event.clientY - centerY) / (rect.height / 2);

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rotateY = Math.max(-1, Math.min(1, deltaX)) * 6;
        const rotateX = Math.max(-1, Math.min(1, deltaY)) * -6;
        const translateX = Math.max(-1, Math.min(1, deltaX)) * 8;
        const translateY = Math.max(-1, Math.min(1, deltaY)) * 8;
        tilt.style.transform = `translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    }

    function handleMouseLeave() {
      if (frame) cancelAnimationFrame(frame);
      tilt.style.transform = "translate(0px, 0px) rotateX(0deg) rotateY(0deg)";
    }

    const section = wrapper.closest(".hero");
    const target = section || wrapper;
    target.addEventListener("mousemove", handleMouseMove);
    target.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mouseleave", handleMouseLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [parallaxEnabled]);

  return (
    <div
      ref={wrapperRef}
      className={`hero-workspace ${reducedMotion ? "" : "hero-workspace--float"}`}
    >
      <div ref={tiltRef} className="hero-workspace__tilt">
        {!isTouch && !reducedMotion && (
          <div className="hero-workspace__particles" aria-hidden="true">
            {PARTICLES.map((particle, index) => (
              <span
                key={index}
                className="hero-workspace__particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>
        )}

        <TerminalCard />

        {TECH_BADGES.map((badge) => (
          <TechBadge key={badge.id} badge={badge} parallaxStrength={isTouch ? 0 : 1} />
        ))}
      </div>
    </div>
  );
}

export default HeroWorkspace;
