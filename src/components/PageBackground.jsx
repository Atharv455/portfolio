import { useEffect, useRef } from "react";
import { usePrefersReducedMotion, useIsTouchDevice } from "../hooks/useMediaCapability";
import "./PageBackground.css";

// Sparse, evenly-spread particle positions - kept deliberately few so the
// background stays subtle rather than busy.
const PARTICLES = [
  { left: "8%", top: "12%", delay: "0s", duration: "11s" },
  { left: "22%", top: "48%", delay: "1.4s", duration: "13s" },
  { left: "38%", top: "22%", delay: "2.6s", duration: "10s" },
  { left: "52%", top: "68%", delay: "0.8s", duration: "14s" },
  { left: "68%", top: "15%", delay: "3.2s", duration: "12s" },
  { left: "78%", top: "55%", delay: "1.9s", duration: "15s" },
  { left: "90%", top: "32%", delay: "2.2s", duration: "11s" },
  { left: "14%", top: "80%", delay: "0.4s", duration: "13s" },
  { left: "60%", top: "88%", delay: "2.9s", duration: "10.5s" },
  { left: "85%", top: "78%", delay: "1.1s", duration: "12.5s" },
];

function PageBackground() {
  const glowRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const mouseGlowEnabled = !reducedMotion && !isTouch;
  const particles = isTouch ? PARTICLES.slice(0, 5) : PARTICLES;

  useEffect(() => {
    if (!mouseGlowEnabled) return;
    const el = glowRef.current;
    if (!el) return;

    let frame = null;

    function handleMouseMove(event) {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mouse-x", `${event.clientX}px`);
        el.style.setProperty("--mouse-y", `${event.clientY}px`);
        el.style.opacity = "1";
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mouseGlowEnabled]);

  return (
    <div className="page-bg" aria-hidden="true">
      <div className={`page-bg__grid ${reducedMotion ? "" : "page-bg__grid--animated"}`} />
      <div className={`page-bg__blob page-bg__blob--blue ${reducedMotion ? "" : "page-bg__blob--drift"}`} />
      <div className={`page-bg__blob page-bg__blob--purple ${reducedMotion ? "" : "page-bg__blob--drift-reverse"}`} />

      {!reducedMotion && (
        <div className="page-bg__particles">
          {particles.map((particle, index) => (
            <span
              key={index}
              className="page-bg__particle"
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

      {mouseGlowEnabled && <div ref={glowRef} className="page-bg__mouse-glow" />}
    </div>
  );
}

export default PageBackground;
