"use client";

import { useRef, useState } from "react";

interface TileConfig {
  label: string;
  small: string;
  x: string;
  y: string;
  r: string;
}

const TILES: TileConfig[] = [
  { small: "01", label: "Question", x: "4%", y: "24px", r: "-7deg" },
  { small: "02", label: "Explore", x: "31%", y: "34px", r: "6deg" },
  { small: "03", label: "Research", x: "63%", y: "20px", r: "-4deg" },
  { small: "04", label: "Build", x: "14%", y: "130px", r: "5deg" },
  { small: "05", label: "Ship", x: "45%", y: "138px", r: "-6deg" },
  { small: "↺", label: "Repeat", x: "74%", y: "126px", r: "7deg" },
];

interface DragState {
  x: number;
  y: number;
  left: number;
  top: number;
}

export default function ProcessBoard() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const [ordered, setOrdered] = useState(false);

  function moveTile(tile: HTMLButtonElement, x: number, y: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    tile.style.left = `${Math.max(0, Math.min(x, canvas.clientWidth - tile.offsetWidth))}px`;
    tile.style.top = `${Math.max(0, Math.min(y, canvas.clientHeight - tile.offsetHeight))}px`;
  }

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    if (ordered) return;
    const tile = event.currentTarget;
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      left: tile.offsetLeft,
      top: tile.offsetTop,
    };
    tile.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    moveTile(event.currentTarget, drag.left + event.clientX - drag.x, drag.top + event.clientY - drag.y);
  }

  function handlePointerUp() {
    dragRef.current = null;
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (ordered) return;
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-12, 0],
      ArrowRight: [12, 0],
      ArrowUp: [0, -12],
      ArrowDown: [0, 12],
    };
    const delta = moves[event.key];
    if (delta) {
      event.preventDefault();
      const tile = event.currentTarget;
      moveTile(tile, tile.offsetLeft + delta[0], tile.offsetTop + delta[1]);
    }
  }

  return (
    <section className="process-board" aria-labelledby="process-title">
      <span className="eyebrow">Process Lab / Interactive Board</span>
      <h3 id="process-title">Chaos, Then Method.</h3>
      <p>Move the stickers around, then turn the process back into a system.</p>
      <div
        ref={canvasRef}
        className={`canvas process-canvas${ordered ? " ordered" : ""}`}
        id="canvas"
        aria-label="Interactive design process sticker canvas"
      >
        {TILES.map((tile) => (
          <button
            key={tile.label}
            className="tile"
            style={{ "--x": tile.x, "--y": tile.y, "--r": tile.r } as React.CSSProperties}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onKeyDown={handleKeyDown}
          >
            <small>{tile.small}</small>
            {tile.label}
          </button>
        ))}
      </div>
      <button
        className="button"
        id="systemize"
        aria-pressed={ordered}
        onClick={() => setOrdered((prev) => !prev)}
      >
        {ordered ? "Back To Chaos ↺" : "Systemize ↗"}
      </button>
    </section>
  );
}
