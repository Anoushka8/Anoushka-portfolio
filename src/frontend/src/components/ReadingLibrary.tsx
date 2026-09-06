"use client";

import { useMemo, useRef, useState } from "react";
import { buildLibraryOrder, libraryItems, type LibraryItem } from "@/lib/library";

interface ShelfDragState {
  x: number;
  left: number;
}

export default function ReadingLibrary() {
  const orderedItems = useMemo(() => buildLibraryOrder(libraryItems), []);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const bookshelfRef = useRef<HTMLDivElement>(null);
  const shelfDragRef = useRef<ShelfDragState | null>(null);

  function selectBook(index: number) {
    setSelectedIndex(index);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest(".book")) return;
    const bookshelf = bookshelfRef.current;
    if (!bookshelf) return;
    shelfDragRef.current = { x: event.clientX, left: bookshelf.scrollLeft };
    bookshelf.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const drag = shelfDragRef.current;
    const bookshelf = bookshelfRef.current;
    if (!drag || !bookshelf) return;
    bookshelf.scrollLeft = drag.left + drag.x - event.clientX;
  }

  function handlePointerUp() {
    shelfDragRef.current = null;
  }

  const selectedItem: LibraryItem | null = selectedIndex !== null ? orderedItems[selectedIndex] : null;

  return (
    <section className="reading-library" id="writing" aria-labelledby="library-title">
      <div className="library-head">
        <div>
          <span className="eyebrow blue">Reading Library</span>
          <h3 id="library-title">Thinking, Out Loud.</h3>
          <p>My writing, things I recommend, and books that keep changing how I see design.</p>
        </div>
      </div>
      <div
        ref={bookshelfRef}
        className="bookshelf"
        id="bookshelf"
        aria-label="Drag sideways to browse books"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="book-row" id="book-row">
          {orderedItems.map((item, index) => (
            <button
              key={`${item.kind}-${item.title}`}
              type="button"
              className={`book book-${item.kind}${selectedIndex === index ? " selected" : ""}`}
              style={
                {
                  "--book-height": `${190 + (index % 4) * 22}px`,
                  "--book-width": `${48 + (index % 3) * 10}px`,
                  "--book-tilt": "1.8deg",
                } as React.CSSProperties
              }
              aria-label={`${item.title}, ${item.label}`}
              onClick={() => selectBook(index)}
            >
              <span className="book-spine">
                <span>{item.title}</span>
                <small>{item.label}</small>
              </span>
            </button>
          ))}
        </div>
        <div className="shelf-edge" aria-hidden="true"></div>
      </div>
      <article className="reading-detail" id="reading-detail" aria-live="polite">
        {selectedItem && (
          <>
            <div>
              <span className="eyebrow">{selectedItem.label}</span>
              <h4>{selectedItem.title}</h4>
              <p>{selectedItem.note}</p>
            </div>
            {selectedItem.link ? (
              <a
                className="button primary"
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Medium ↗
              </a>
            ) : (
              <span className="library-pending">Details coming soon</span>
            )}
          </>
        )}
      </article>
    </section>
  );
}
