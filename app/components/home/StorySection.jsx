import {Link} from 'react-router';

export function StorySection() {
  return (
    <section className="story">
      <div className="story-bg">
        <div className="story-content">
          <span className="story-label">OUR STORY</span>
          <h1>
            WHERE <span className="accent">STYLE</span><br />
            MEETS <span className="accent2">STANDARD</span>
          </h1>
          <p>
            We believe fashion is more than what you wear — it's who you become.
            StyleIQ was built for those who refuse to blend in, crafted with
            intention and worn with purpose.
          </p>
          <Link to="/pages/about" className="btn-gold">DISCOVER THE JOURNEY</Link>
        </div>
      </div>
    </section>
  );
}