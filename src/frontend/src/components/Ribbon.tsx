const WORDS = ["Question Everything", "Explore Wildly", "Design With Intent", "Build With Play"];

export default function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        <div className="ribbon-group">
          {WORDS.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
        <div className="ribbon-group">
          {WORDS.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
