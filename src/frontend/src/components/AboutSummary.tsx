export default function AboutSummary() {
  return (
    <div className="about-grid">
      <div>
        <span className="eyebrow blue">About Me</span>
        <h2>
          Who I Am Shapes
          <br />
          What I Design.
        </h2>
        <p className="blue">Jack of all trades? Absolutely.</p>
        <p>
          I’m Anoushka, a product designer and UX architect based in Pune. I’m studying User
          Experience Design at MIT ADT University’s Institute of Design.
        </p>
        <p>
          I move between research, AI, motion, systems, and brand. Exploring widely helps me
          connect ideas; designing intentionally turns those connections into something useful.
        </p>
        <div className="actions">
          <a className="button primary" href="about.html">
            Get To Know Me <span>↗</span>
          </a>
        </div>
      </div>
      <div>
        <div className="traits">
          <div className="trait">
            <b>Questioner</b>
            <p>I ask why. Always.</p>
          </div>
          <div className="trait">
            <b>Explorer</b>
            <p>I try everything.</p>
          </div>
          <div className="trait">
            <b>Designer</b>
            <p>I make it intentional.</p>
          </div>
          <div className="trait">
            <b>Systems Thinker</b>
            <p>I see patterns.</p>
          </div>
          <div className="trait">
            <b>Builder</b>
            <p>I ship it.</p>
          </div>
          <div className="trait">
            <b>Playful</b>
            <p>I have fun doing it.</p>
          </div>
        </div>
        <span className="eyebrow">Currently Curious About</span>
        <div className="tags interests">
          <span>Behavioral Research</span>
          <span>Human–AI Interaction</span>
          <span>Design Systems</span>
          <span>Motion Craft</span>
          <span>Fashion &amp; Sustainability</span>
          <span>Decision Making</span>
        </div>
      </div>
    </div>
  );
}
