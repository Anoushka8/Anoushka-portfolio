"use client";

import { useState } from "react";
import Image from "next/image";

type Card = "jack" | "joker";

export default function AboutHero() {
  const [active, setActive] = useState<Card>("jack");

  return (
    <section className="page-hero about-hero">
      <div className="wrap about-hero-grid">
        <div className="about-hero-copy">
          <span className="eyebrow blue">About Me / Beyond The Screens</span>
          <h1>
            Hi, it’s me
            <br />
            <span>again.</span>
          </h1>
          <p className="page-intro">
            I’m Anoushka, a product designer and UX architect from Pune. Design is how I
            organize curiosity; the rest of my life is where I keep finding it.
          </p>
        </div>
        <figure className="about-card-stack" aria-label="Jack and Joker designer card deck">
          <button
            className={`about-playing-card jack-card${active === "jack" ? " active" : ""}`}
            type="button"
            aria-label="Bring Jack card forward"
            aria-pressed={active === "jack"}
            onClick={() => setActive("jack")}
          >
            <Image
              src="/images/about-jack-card.png"
              alt="Modernist blue Jack card featuring Anoushka"
              width={390}
              height={585}
            />
          </button>
          <button
            className={`about-playing-card joker-card${active === "joker" ? " active" : ""}`}
            type="button"
            aria-label="Bring Joker card forward"
            aria-pressed={active === "joker"}
            onClick={() => setActive("joker")}
          >
            <Image
              src="/images/about-joker-card.png"
              alt="Modernist blue Joker card featuring Anoushka"
              width={390}
              height={585}
            />
          </button>
          <figcaption>Pick a card.</figcaption>
        </figure>
      </div>
    </section>
  );
}
