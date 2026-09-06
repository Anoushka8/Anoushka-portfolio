"use client";

import { usePathname } from "next/navigation";

// Each page's own main landmark id, matching HTML_Site's per-page skip-link
// target verbatim: index.html -> #work, about.html -> #about-me, work.html -> #all-work.
const SKIP_TARGETS: Record<string, string> = {
  "/": "#work",
  "/about": "#about-me",
  "/work": "#all-work",
};

export default function SkipLink() {
  const pathname = usePathname();
  const target = SKIP_TARGETS[pathname ?? "/"] ?? "#work";

  return (
    <a className="skip" href={target}>
      Skip to {pathname === "/about" ? "about" : "work"}
    </a>
  );
}
