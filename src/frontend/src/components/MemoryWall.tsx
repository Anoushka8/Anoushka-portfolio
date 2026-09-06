"use client";

import { useEffect, useRef } from "react";

const MEMORY_CARDS = [
  { className: "memory-one", label: "Portrait", photo: "Photo 01", caption: "Me, probably mid-thought." },
  { className: "memory-two", label: "Craft", photo: "Photo 02", caption: "Hands busy, brain louder." },
  { className: "memory-three", label: "Pune", photo: "Photo 03", caption: "Home textures." },
  { className: "memory-four", label: "Studio", photo: "Photo 04", caption: "Work in progress." },
  { className: "memory-five", label: "Fashion", photo: "Photo 05", caption: "Details I noticed." },
  { className: "memory-six", label: "People", photo: "Photo 06", caption: "Good conversations." },
  { className: "memory-seven", label: "Chaos", photo: "Photo 07", caption: "No context needed." },
  { className: "memory-eight", label: "Making", photo: "Photo 08", caption: "A small obsession." },
  { className: "memory-nine", label: "Outside", photo: "Photo 09", caption: "Looking elsewhere." },
  { className: "memory-ten", label: "Friends", photo: "Photo 10", caption: "Things worth keeping." },
];

interface MemoryDragState {
  x: number;
  y: number;
  startX: number;
  startY: number;
}

export default function MemoryWall() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    const resetButton = resetRef.current;
    if (!viewport || !canvas) return;

    let memoryX = 0;
    let memoryY = 0;
    let drag: MemoryDragState | null = null;

    function clampMemories() {
      if (!viewport || !canvas) return;
      const minX = Math.min(0, viewport.clientWidth - canvas.offsetWidth);
      const minY = Math.min(0, viewport.clientHeight - canvas.offsetHeight);
      memoryX = Math.max(minX, Math.min(0, memoryX));
      memoryY = Math.max(minY, Math.min(0, memoryY));
      canvas.style.transform = `translate(${memoryX}px,${memoryY}px)`;
    }

    function centerMemories() {
      if (!viewport || !canvas) return;
      memoryX = (viewport.clientWidth - canvas.offsetWidth) / 2;
      memoryY = (viewport.clientHeight - canvas.offsetHeight) / 2;
      clampMemories();
    }

    const onPointerDown = (event: PointerEvent) => {
      drag = { x: event.clientX, y: event.clientY, startX: memoryX, startY: memoryY };
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add("dragging");
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!drag) return;
      memoryX = drag.startX + event.clientX - drag.x;
      memoryY = drag.startY + event.clientY - drag.y;
      clampMemories();
    };
    const release = () => {
      drag = null;
      viewport.classList.remove("dragging");
    };
    const onKeydown = (event: KeyboardEvent) => {
      const moves: Record<string, [number, number]> = {
        ArrowLeft: [30, 0],
        ArrowRight: [-30, 0],
        ArrowUp: [0, 30],
        ArrowDown: [0, -30],
      };
      const move = moves[event.key];
      if (!move) return;
      event.preventDefault();
      memoryX += move[0];
      memoryY += move[1];
      clampMemories();
    };
    const onResize = () => clampMemories();

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", release);
    viewport.addEventListener("pointercancel", release);
    viewport.addEventListener("keydown", onKeydown);
    window.addEventListener("resize", onResize);
    resetButton?.addEventListener("click", centerMemories);

    centerMemories();

    return () => {
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", release);
      viewport.removeEventListener("pointercancel", release);
      viewport.removeEventListener("keydown", onKeydown);
      window.removeEventListener("resize", onResize);
      resetButton?.removeEventListener("click", centerMemories);
    };
  }, []);

  return (
    <section className="memory-section" id="gallery" aria-labelledby="memory-title">
      <div className="wrap memory-heading">
        <div>
          <span className="eyebrow blue">Gallery Dump / Free Pan</span>
          <h2 id="memory-title">A Little Life, Unsorted.</h2>
        </div>
        <button className="button" id="reset-memories" type="button" ref={resetRef}>
          Recenter ↙
        </button>
      </div>
      <div
        className="memory-viewport"
        id="memory-viewport"
        ref={viewportRef}
        tabIndex={0}
        aria-label="Drag in any direction to explore Anoushka's photo wall"
      >
        <div className="memory-canvas" id="memory-canvas" ref={canvasRef}>
          {MEMORY_CARDS.map((card) => (
            <figure className={`memory-card ${card.className}`} key={card.className}>
              <div>
                <span>{card.label}</span>
                <small>{card.photo}</small>
              </div>
              <figcaption>{card.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <p className="memory-instruction wrap">
        Drag to wander · Arrow keys work too · Photos can be replaced later
      </p>
    </section>
  );
}
