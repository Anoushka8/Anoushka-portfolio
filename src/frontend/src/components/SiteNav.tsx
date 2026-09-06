"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "about.html", label: "About", sectionId: null },
  { href: "#work", label: "Work", sectionId: "work" },
  { href: "#playground", label: "Playground", sectionId: "playground" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

const SECTION_IDS = ["about", "work", "playground", "contact"];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55%", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuToggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <header className="nav-shell">
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label="Anoushka Dandawate home">
          <Image src="/images/anoushka-owl-logo.png" alt="" width={52} height={52} preload className="brand-owl" />
          <span className="brand-name">Anoushka<br />Dandawate</span>
        </Link>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`nav-tabs${open ? " open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.sectionId && active === link.sectionId ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
