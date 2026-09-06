"use client";

import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

/** Mounts the reveal-on-scroll IntersectionObserver for the page. Renders nothing. */
export default function RevealOnScroll() {
  useRevealOnScroll();
  return null;
}
