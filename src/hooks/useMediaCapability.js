import { useEffect, useState } from "react";

// Whether the user has requested reduced motion at the OS/browser level.
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event) => setReduced(event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return reduced;
}

// Whether the primary input is touch (no fine pointer) - used to disable
// mouse-follow effects that don't make sense on touch devices.
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(
    () => typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handler = (event) => setIsTouch(!event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isTouch;
}
