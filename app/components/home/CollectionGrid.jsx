import {Link} from 'react-router';

const collections = [
  {label: "MEN'S WEAR", handle: 'men', placeholder: 'MEN'},
  {label: "WOMEN'S WEAR", handle: 'women', placeholder: 'WOMEN'},
  {label: 'UNISEX PIECES', handle: 'unisex', placeholder: 'UNISEX'},
  {label: 'ACCESSORIES', handle: 'accessories', placeholder: 'ACCESS'},
];

export function CollectionGrid() {
  return (
    <section className="collection-section">
      <div className="collection-header">
        <span>OUR COLLECTION</span>
        <Link to="/collections">VIEW ALL PRODUCTS →</Link>
      </div>
      <div className="collection-row">
        {collections.map((col) => (
          <div key={col.handle} className="collection-card">
            <div className="collection-card-img">
              <span className="placeholder-label">{col.placeholder}</span>
              <div className="collection-card-overlay">
                <h3>{col.label}</h3>
                <Link to={`/collections/${col.handle}`}>SHOP NOW</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}