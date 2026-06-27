import {Link} from 'react-router';

const products = [
  {name: 'Obsidian Blazer', price: '₱ 8,500', label: 'JACKET'},
  {name: 'Silk Evening Dress', price: '₱ 12,000', label: 'DRESS'},
  {name: 'Structured Overcoat', price: '₱ 15,500', label: 'COAT'},
  {name: 'Linen Co-ord Set', price: '₱ 6,200', label: 'SET'},
];

export function BestSellers() {
  return (
    <section className="best-sellers">
      <div className="best-sellers-visual">
        <span>BEST</span>
      </div>
      <div className="best-sellers-right">
        <span className="best-sellers-label">BEST SELLERS</span>
        <div className="best-grid">
          {products.map((product) => (
            <div key={product.name} className="best-card">
              <div className="best-card-img">
                <span>{product.label}</span>
              </div>
              <div className="best-card-info">
                <h3>{product.name}</h3>
                <span className="price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/collections/best-sellers" className="view-all-btn">
          VIEW ALL BEST SELLERS
        </Link>
      </div>
    </section>
  );
}