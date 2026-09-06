import ReadingLibrary from "./ReadingLibrary";

const RIBBON_WORDS = ["Human–AI", "Behavior", "Brand", "Systems", "Research", "Sustainability"];

export default function MoreExplorations() {
  return (
    <section className="section surface surface-light">
      <span className="eyebrow blue">Beyond The Featured Work</span>
      <h2>More Explorations</h2>
      <div className="small-grid">
        <article className="small-card">
          <span className="eyebrow blue">Branding &amp; Social / June–July 2025</span>
          <h3>Harshdeep Foundation</h3>
          <p>Branding campaigns, social media design, and outreach materials for an NGO.</p>
          <div className="tags">
            <span>Branding</span>
            <span>Social Media</span>
            <span>Campaigns</span>
          </div>
        </article>
        <article className="small-card">
          <span className="eyebrow blue">Academic / Behavioral Research</span>
          <h3>Social Psychology Of Innerwear</h3>
          <p>
            A generative research study exploring adolescents’ attitudes, stigma, and habits
            through qualitative insights.
          </p>
          <div className="tags">
            <span>Research</span>
            <span>Behavioral Study</span>
            <span>Insights</span>
          </div>
        </article>
      </div>
      <div className="work-ribbon" aria-hidden="true">
        <div className="work-ribbon-track">
          <div className="work-ribbon-group">
            {RIBBON_WORDS.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <div className="work-ribbon-group">
            {RIBBON_WORDS.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </div>
      </div>
      <ReadingLibrary />
    </section>
  );
}
