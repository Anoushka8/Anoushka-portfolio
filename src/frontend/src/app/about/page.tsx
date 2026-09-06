import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutProfile from "@/components/AboutProfile";
import MemoryWall from "@/components/MemoryWall";

export const metadata: Metadata = {
  title: "About — Anoushka Dandawate",
  description:
    "About Anoushka Dandawate — product designer, UX architect, maker, and restless explorer in Pune.",
};

export default function About() {
  return (
    <main className="page-main" id="about-me">
      <AboutHero />
      <AboutProfile />
      <MemoryWall />
    </main>
  );
}
