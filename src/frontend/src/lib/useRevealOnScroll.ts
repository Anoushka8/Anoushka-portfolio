"use client";

import { useEffect } from "react";

/**
 * Ported verbatim from HTML_Site/index.html:
 * IntersectionObserver + Web Animations API entrance animation for
 * `.project, .section-head, .small-card`, respecting prefers-reduced-motion.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: "translateY(20px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 650, easing: "cubic-bezier(.215,.61,.355,1)" }
            );
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 }
    );

    document
      .querySelectorAll(".project, .section-head, .small-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
