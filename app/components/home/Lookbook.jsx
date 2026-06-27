import {Link} from 'react-router';

const items = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const tones = ['lk-1', 'lk-2', 'lk-3', 'lk-4', 'lk-5', 'lk-6'];

export function Lookbook() {
  return (
    <section className="lookbook">
      <div className="lookbook-header">
        <h2>FROM THE LOOKBOOK</h2>
        <Link to="/pages/lookbook">VIEW ALL LOOKBOOK →</Link>
      </div>
      <div className="lookbook-grid">
        {items.map((item, i) => (
          <div key={item} className={`lookbook-item ${tones[i]}`}>
            <div className="lookbook-item-inner">
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}