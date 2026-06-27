import {Link} from 'react-router';

export function NewArrivals() {
  return (
    <section className="new-arrivals">
      <div className="new-arrivals-panel panel-dark">
        <span className="panel-eyebrow">NEW ARRIVALS</span>
        <h1>CELESTIAL<br />NOIR</h1>
        <p>
          The new drop has arrived.<br />
          Limited pieces. Timeless silhouettes.
        </p>
        <Link to="/collections/new-arrivals" className="btn-panel">SHOP NEW IN</Link>
      </div>
      <div className="new-arrivals-panel panel-warm">
        <span className="panel-eyebrow">THE ART OF</span>
        <h1>MASTER<br />CRAFT</h1>
        <p>
          Meticulous. Intentional. Timeless.<br />
          Discover the hands behind every seam.
        </p>
        <Link to="/pages/craftsmanship" className="btn-panel">LEARN MORE</Link>
      </div>
    </section>
  );
}