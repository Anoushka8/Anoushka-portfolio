import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import ProjectGrid from "@/components/ProjectGrid";
import ProcessBoard from "@/components/ProcessBoard";
import ToolkitDock from "@/components/ToolkitDock";
import AboutSummary from "@/components/AboutSummary";
import ExperienceList from "@/components/ExperienceList";
import EmrysCraft from "@/components/EmrysCraft";
import MoreExplorations from "@/components/MoreExplorations";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <main>
      <RevealOnScroll />
      <Hero />
      <Ribbon />
      <ProjectGrid />
      <section className="playground" id="playground">
        <div className="wrap section surface surface-dark">
          <div className="section-head">
            <div>
              <span className="eyebrow">The Playground</span>
              <h2>Serious About Play.</h2>
            </div>
            <p>A little window into how I think, what I use, and how ideas become systems.</p>
          </div>
          <div className="playground-flow">
            <ProcessBoard />
            <ToolkitDock />
          </div>
        </div>
      </section>
      <div className="wrap section-stack">
        <section className="section surface surface-light" id="about">
          <AboutSummary />
          <ExperienceList />
        </section>
        <EmrysCraft />
        <MoreExplorations />
      </div>
    </main>
  );
}
