export default function AboutProfile() {
  return (
    <section className="about-profile">
      <div className="wrap about-grid">
        <div>
          <span className="eyebrow blue">More Than The Work</span>
          <h2>
            Who I Am Shapes
            <br />
            What I Design.
          </h2>
          <p className="blue">Jack of all trades? Absolutely.</p>
          <p>
            I’m studying User Experience Design at MIT ADT University’s Institute of Design. I
            move between research, AI, systems, making, writing, fashion, and the details I
            notice along the way.
          </p>
          <p>
            Exploring widely helps me connect ideas. Designing intentionally turns those
            connections into something useful.
          </p>
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
            <span>Writing</span>
            <span>Fashion &amp; Sustainability</span>
            <span>Decision Making</span>
          </div>
        </div>
      </div>
    </section>
  );
}
