import {Link} from 'react-router';

export function CraftSection() {
  return (
    <section className="craft">
      <div className="craft-content">
        <h1>BE YOUR<br />OWN LEGEND</h1>
        <p>
          Fashion is not just what you wear.<br />
          It is your armor, your story, your signature.
        </p>
        <Link to="/collections" className="btn-primary">DISCOVER THE JOURNEY</Link>
      </div>
    </section>
  );
}