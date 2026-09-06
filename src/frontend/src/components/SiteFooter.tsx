"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const FOOTER_TITLE = "Let’s Build Together.";

interface FooterDragState {
  x: number;
  y: number;
  startX: number;
  startY: number;
}

export default function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const selectionRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const footerSelection = selectionRef.current;
    if (!footer || !footerSelection) return;

    function selectFooterLetter(letter: HTMLElement) {
      if (!footer || !footerSelection) return;
      const footerBounds = footer.getBoundingClientRect();
      const letterBounds = letter.getBoundingClientRect();
      const padding = 4;
      const width = letterBounds.width + padding * 2;
      const height = letterBounds.height + padding * 2;
      footerSelection.style.left = `${letterBounds.left - footerBounds.left - padding}px`;
      footerSelection.style.top = `${letterBounds.top - footerBounds.top - padding}px`;
      footerSelection.style.width = `${width}px`;
      footerSelection.style.height = `${height}px`;
      footerSelection.style.setProperty("--selection-width", `${width}px`);
      footerSelection.style.setProperty("--selection-height", `${height}px`);
      footerSelection.classList.add("visible");
    }

    const resets: (() => void)[] = [];
    const cleanups: (() => void)[] = [];

    function wireDraggable(el: HTMLElement) {
      let drag: FooterDragState | null = null;
      let x = 0;
      let y = 0;

      function draw() {
        el.style.setProperty("--dx", `${x}px`);
        el.style.setProperty("--dy", `${y}px`);
        requestAnimationFrame(() => selectFooterLetter(el));
      }

      resets.push(() => {
        x = 0;
        y = 0;
        draw();
      });

      const onPointerEnter = () => selectFooterLetter(el);
      const onPointerLeave = () => {
        if (!drag) footerSelection?.classList.remove("visible");
      };
      const onPointerDown = (event: PointerEvent) => {
        drag = { x: event.clientX, y: event.clientY, startX: x, startY: y };
        el.setPointerCapture(event.pointerId);
        el.classList.add("dragging");
        selectFooterLetter(el);
      };
      const onPointerMove = (event: PointerEvent) => {
        if (!drag) return;
        const limit = window.innerWidth < 768 ? 36 : 80;
        x = Math.max(-limit, Math.min(limit, drag.startX + event.clientX - drag.x));
        y = Math.max(-limit, Math.min(limit, drag.startY + event.clientY - drag.y));
        draw();
      };
      const release = () => {
        drag = null;
        el.classList.remove("dragging");
      };

      el.addEventListener("pointerenter", onPointerEnter);
      el.addEventListener("pointerleave", onPointerLeave);
      el.addEventListener("pointerdown", onPointerDown);
      el.addEventListener("pointermove", onPointerMove);
      el.addEventListener("pointerup", release);
      el.addEventListener("pointercancel", release);

      cleanups.push(() => {
        el.removeEventListener("pointerenter", onPointerEnter);
        el.removeEventListener("pointerleave", onPointerLeave);
        el.removeEventListener("pointerdown", onPointerDown);
        el.removeEventListener("pointermove", onPointerMove);
        el.removeEventListener("pointerup", release);
        el.removeEventListener("pointercancel", release);
      });
    }

    footer.querySelectorAll<HTMLElement>(".footer-letter, .footer-brand-part").forEach(wireDraggable);

    const onDblClick = () => {
      resets.forEach((reset) => reset());
      footerSelection.classList.remove("visible");
    };
    footer.addEventListener("dblclick", onDblClick);
    cleanups.push(() => footer.removeEventListener("dblclick", onDblClick));

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  const words = FOOTER_TITLE.split(" ");

  return (
    <footer ref={footerRef} className="footer" id="contact">
      <div className="wrap">
        <div className="footer-kicker-row">
          <span className="eyebrow">Have A Question Worth Exploring?</span>
          <span className="footer-brand" aria-label="Anoushka Dandawate">
            <span className="footer-brand-part" aria-hidden="true">
              <Image src="/images/anoushka-owl-logo.png" alt="" width={52} height={52} className="brand-owl" draggable={false} />
            </span>
            <span className="brand-name" aria-hidden="true">
              Anoushka<br />Dandawate
            </span>
          </span>
        </div>
        <div className="footer-title-row">
          <h2 className="footer-letters" aria-label={FOOTER_TITLE}>
            {words.map((word, wordIndex) => (
              <span className="footer-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
                {[...word].map((character, charIndex) => {
                  // Ported verbatim: --r = ((wordIndex*3 + index) % 5 - 2) * 0.7deg
                  const rotation = (((wordIndex * 3 + charIndex) % 5) - 2) * 0.7;
                  return (
                    <span
                      className="footer-letter"
                      key={charIndex}
                      style={{ "--r": `${rotation}deg` } as React.CSSProperties}
                    >
                      {character}
                    </span>
                  );
                })}
              </span>
            ))}
          </h2>
        </div>
        <span ref={selectionRef} className="footer-selection" aria-hidden="true"></span>
        <span className="letter-hint">Drag the letters and mark. Double-click anywhere to reset.</span>
        <p>
          Whether it’s a project, collaboration, or a conversation about chaos, systems, or motion
          — I’m restless and always exploring.
        </p>
        <div className="socials">
          <a id="footer-email" href="mailto:dandawateanoushka@gmail.com">
            <img src="https://cdn.simpleicons.org/gmail/FFFFFF" alt="" />
            Email <span>↗</span>
          </a>
          <a href="https://linkedin.com/in/anoushka-dandawate" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg" alt="" />
            LinkedIn <span>↗</span>
          </a>
          <a href="https://behance.net/anoushkdandawa" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/behance/FFFFFF" alt="" />
            Behance <span>↗</span>
          </a>
          <a href="https://medium.com/@dandawateanoushka" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/medium/FFFFFF" alt="" />
            Medium <span>↗</span>
          </a>
        </div>
        <div className="footnote">
          <span>© 2026 Anoushka Dandawate · Pune, India</span>
          <span>Creative Chaos With Method.</span>
        </div>
      </div>
    </footer>
  );
}
