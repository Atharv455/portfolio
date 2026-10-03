import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      <FiArrowUp size={18} />
    </button>
  );
}

export default BackToTop;
