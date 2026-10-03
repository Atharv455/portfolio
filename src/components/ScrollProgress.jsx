import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />;
}

export default ScrollProgress;
