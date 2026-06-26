import {Link} from 'react-router';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">NEW SEASON — SS 2025</p>
        <h1>
          DRESS<br />
          THE <span className="hero-gold">MYTH.</span><br />
          WEAR THE<br />
          STANDARD.
        </h1>
        <p className="hero-sub">
          Precision-crafted fashion for those who define their own standard.
          Each piece, a statement. Each detail, intentional.
        </p>
        <div className="hero-btns">
          <Link to="/collections" className="btn-primary">SHOP COLLECTION</Link>
          <Link to="/pages/about" className="btn-outline">DISCOVER STORY</Link>
        </div>
      </div>
      <div className="hero-line" />
    </section>
  );
}