import type { Metadata } from "next";
import { archiveCards } from "@/lib/archive";

export const metadata: Metadata = {
  title: "Work — Anoushka Dandawate",
  description:
    "Selected product design, UX architecture, research, and systems work by Anoushka Dandawate.",
};

export default function WorkPage() {
  return (
    <main className="page-main" id="all-work">
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow blue">Selected Work</span>
          <h1>
            More questions.
            <br />
            <span>More systems.</span>
          </h1>
          <p className="page-intro">
            A growing collection of product design, human–AI interaction, research, systems
            thinking, and brand experiments.
          </p>
        </div>
      </section>
      <section className="wrap archive-grid" aria-label="Work archive">
        {archiveCards.map((card) => (
          <article className="archive-card" key={card.id}>
            <div>
              <span className={`eyebrow${card.eyebrowBlue ? " blue" : ""}`}>{card.eyebrow}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <div className="archive-meta">
              <span>{card.meta[0]}</span>
              <span>{card.meta[1]}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
