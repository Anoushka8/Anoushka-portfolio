"use client";

import { useRef, useState } from "react";

export default function Hero() {
  const heroCardRef = useRef<HTMLDivElement>(null);
  const heroCursorRef = useRef<HTMLSpanElement>(null);
  const [showId, setShowId] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  function swapHeroCard() {
    setShowId((prev) => !prev);
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("a,button")) return;
    swapHeroCard();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      swapHeroCard();
    }
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = heroCardRef.current?.getBoundingClientRect();
    if (!bounds || !heroCursorRef.current) return;
    heroCursorRef.current.style.left = `${event.clientX - bounds.left}px`;
    heroCursorRef.current.style.top = `${event.clientY - bounds.top}px`;
  }

  return (
    <div className="wrap">
      <section className="hero surface surface-dark" aria-labelledby="hero-title">
        <div
          ref={heroCardRef}
          className={`identity reveal${showId ? " show-id" : ""}${cursorVisible ? " cursor-visible" : ""}`}
          role="button"
          tabIndex={0}
          aria-pressed={showId}
          aria-label={showId ? "Show portrait card" : "Show portfolio ID"}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onPointerEnter={() => setCursorVisible(true)}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setCursorVisible(false)}
        >
          <div className="card-inner">
            <div className="hero-card-face hero-card-front" aria-hidden={showId}>
              <span className="identity-label eyebrow">Product Designer / UX Architect</span>
              <div className="hero-card-copy">
                <h1 id="hero-title">
                  Creative Chaos.
                  <br />
                  <span>With Method.</span>
                </h1>
                <div className="actions">
                  <a className="button primary" href="#work">
                    Explore My Work <span>↘</span>
                  </a>
                  <a className="button" href="#contact">
                    Let&apos;s Have a Chat <span>↗</span>
                  </a>
                </div>
                <p className="hero-meta">B.Des User Experience Design · MIT Institute of Design</p>
              </div>
              <div className="portrait-slot" aria-label="Reserved space for Anoushka portrait">
                <span>Portrait</span>
              </div>
              <span className="sticker one">Research First. Always.</span>
              <span className="sticker two">Jack Of All Trades ↗</span>
              <div className="name-tag">
                Hello, I’m Anoushka.
                <small>Product Designer / UX Architect</small>
              </div>
            </div>
            <div className="hero-card-face hero-card-back" aria-hidden={!showId}>
              <div className="id-top">
                <span>Portfolio ID</span>
                <span>AD / 2026</span>
              </div>
              <div className="id-left">
                <div className="id-profile">
                  <div className="id-monogram" aria-hidden="true">
                    AD
                  </div>
                  <div>
                    <h3>Anoushka Dandawate</h3>
                    <p>Product Designer / UX Architect</p>
                  </div>
                </div>
                <p className="id-blurb">
                  Restless explorer. Research-driven questioner. Playful designer building
                  intentional systems.
                </p>
                <blockquote className="id-quote">“Question everything. Design with intent.”</blockquote>
              </div>
              <div className="id-right">
                <dl className="id-details">
                  <div>
                    <dt>From</dt>
                    <dd>Pune, India</dd>
                  </div>
                  <div>
                    <dt>College</dt>
                    <dd>
                      MIT ADT University
                      <br />
                      Institute of Design
                    </dd>
                  </div>
                  <div>
                    <dt>Program</dt>
                    <dd>B.Des User Experience Design</dd>
                  </div>
                  <div>
                    <dt>Study</dt>
                    <dd>2023–Present</dd>
                  </div>
                </dl>
                <div className="id-categories" aria-label="Design focus areas">
                  <span>Human–AI</span>
                  <span>UX Strategy</span>
                  <span>Design Systems</span>
                  <span>Research</span>
                  <span>Motion</span>
                  <span>Brand</span>
                </div>
                <div className="id-socials" aria-label="Social links">
                  <a href="mailto:dandawateanoushka@gmail.com" aria-label="Email">
                    <img src="https://cdn.simpleicons.org/gmail/253247" alt="" />
                    Email
                  </a>
                  <a
                    href="https://linkedin.com/in/anoushka-dandawate"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
                      alt=""
                    />
                    LinkedIn
                  </a>
                  <a
                    href="https://behance.net/anoushkdandawa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Behance"
                  >
                    <img src="https://cdn.simpleicons.org/behance/253247" alt="" />
                    Behance
                  </a>
                  <a
                    href="https://medium.com/@dandawateanoushka"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                  >
                    <img src="https://cdn.simpleicons.org/medium/253247" alt="" />
                    Medium
                  </a>
                </div>
                <button className="id-resume" type="button" disabled>
                  Download Resume <small>PDF coming soon</small>
                </button>
              </div>
              <div className="id-bottom">
                <span>Currently Curious About</span>
                <div>
                  <b>AI with personality</b>
                  <b>Why people choose</b>
                  <b>Motion with purpose</b>
                </div>
              </div>
            </div>
          </div>
          <span ref={heroCursorRef} className="card-cursor" aria-hidden="true">
            {showId ? "View portrait ↙" : "View ID ↗"}
          </span>
        </div>
      </section>
    </div>
  );
}
