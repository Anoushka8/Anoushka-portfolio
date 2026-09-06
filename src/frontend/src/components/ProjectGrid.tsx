"use client";

import { useRef, useState } from "react";
import { projects, type Project } from "@/lib/projects";

function CoverDecoration({ id }: { id: string }) {
  if (id === "glow") return <span className="orbit" aria-hidden="true"></span>;
  if (id === "ayojak")
    return (
      <span className="dashboard" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </span>
    );
  if (id === "perplexity")
    return (
      <span className="search-line" aria-hidden="true">
        A little more room to think. ↗
      </span>
    );
  return (
    <span className="reloop" aria-hidden="true">
      ↻
    </span>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return (
    <article className="project" data-categories={project.categories.join(" ")}>
      <button
        className={`cover ${project.id}`}
        data-case={project.id}
        aria-label={`Open ${project.name} project overview`}
        onClick={() => onOpen(project.id)}
      >
        <span className="cover-label">
          TYPOGRAPHIC PREVIEW / {project.id === "perplexity" ? "REDESIGN STUDY" : "PROJECT COVER"}
        </span>
        <span className="cover-title">
          {project.name}
          {project.id === "glow" ? "✳" : ""}
        </span>
        <span className="cover-sub">{project.subtitle}</span>
        <CoverDecoration id={project.id} />
        <span className="read-time">{project.time} min read</span>
      </button>
      <p className="question">{project.question}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>{project.role}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-bottom">
        <button className="text-button" data-case={project.id} onClick={() => onOpen(project.id)}>
          Project Overview ↗
        </button>
      </div>
    </article>
  );
}

export default function ProjectGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  function openCase(id: string) {
    const project = projects.find((p) => p.id === id) ?? null;
    setActiveProject(project);
    dialogRef.current?.showModal();
  }

  function closeCase() {
    dialogRef.current?.close();
  }

  return (
    <>
      <div className="wrap">
        <section className="section surface surface-light" id="work">
          <div className="section-head">
            <div>
              <span className="eyebrow blue">Featured Work</span>
              <h2>Questions Into Systems.</h2>
            </div>
            <p>Explorations in human–AI interaction, cognitive UX, and connected experiences.</p>
          </div>
          <div className="grid" id="projects">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={openCase} />
            ))}
          </div>
          <div className="section-cta">
            <a className="button primary" href="work.html">
              See More Work <span>↗</span>
            </a>
          </div>
        </section>
      </div>

      <dialog ref={dialogRef} id="case-dialog" aria-labelledby="case-title">
        <button className="button close" id="close-case" onClick={closeCase}>
          Close ×
        </button>
        <div id="case-content">
          {activeProject && (
            <>
              <p className="eyebrow blue">Project Overview / {activeProject.subtitle}</p>
              <h2 id="case-title">{activeProject.name}</h2>
              <p>{activeProject.role}</p>
              <h3>{activeProject.question}</h3>
              <p>{activeProject.description}</p>
              <h3>The Real Challenge</h3>
              <p>{activeProject.challenge}</p>
              <h3>The Method</h3>
              <ul>
                {activeProject.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <h3>Reflection</h3>
              <p>{activeProject.learning}</p>
              <p className="placeholder">
                Research artifacts, final screens, and prototype links pending.
              </p>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
