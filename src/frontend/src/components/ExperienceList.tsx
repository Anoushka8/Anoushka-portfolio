"use client";

import { useState } from "react";
import Image from "next/image";
import { experienceEntries } from "@/lib/experience";

export default function ExperienceList() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="experience" id="resume">
      <h3>My Recent Experiences</h3>
      <div className="experience-list">
        {experienceEntries.map((entry) => {
          const isExpanded = Boolean(expanded[entry.id]);
          const detailId = `experience-${entry.id}`;
          return (
            <article
              key={entry.id}
              className={`experience-row${isExpanded ? " expanded" : ""}`}
            >
              <div className="experience-meta">
                <div className="experience-orgline">
                  {entry.logo.kind === "image" ? (
                    <Image
                      className={entry.logo.className}
                      src={entry.logo.src}
                      alt=""
                      width={120}
                      height={90}
                      unoptimized
                    />
                  ) : (
                    <span className="experience-logo logo-placeholder" aria-hidden="true">
                      {entry.logo.initials}
                    </span>
                  )}
                  <strong>{entry.org}</strong>
                </div>
                <time>{entry.time}</time>
                <span>{entry.title}</span>
              </div>
              <div className="experience-summary">
                <p>{entry.summary}</p>
                <p className="experience-detail" id={detailId}>
                  {entry.detail}
                </p>
              </div>
              <button
                className="experience-toggle"
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailId}
                aria-label={`Read more about ${entry.org}`}
                onClick={() => toggle(entry.id)}
              >
                <span></span>
                <span></span>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
