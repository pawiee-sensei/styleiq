import {Link} from 'react-router';

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-brand">
          <div className="footer-brand-name">STYLEIQ</div>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="TikTok">TK</a>
            <a href="#" aria-label="Pinterest">PIN</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>SHOP</h4>
            <Link to="/collections/all">All Clothing</Link>
            <Link to="/collections/men">Men's Wear</Link>
            <Link to="/collections/women">Women's Wear</Link>
            <Link to="/collections/unisex">Unisex</Link>
            <Link to="/collections/accessories">Accessories</Link>
          </div>
          <div className="footer-col">
            <h4>COLLECTIONS</h4>
            <Link to="/collections/best-sellers">Best Sellers</Link>
            <Link to="/collections/new-arrivals">New Arrivals</Link>
            <Link to="/collections/signature">Signature Pieces</Link>
            <Link to="/collections/limited">Limited Drops</Link>
            <Link to="/pages/gift-guide">Gift Guide</Link>
          </div>
          <div className="footer-col">
            <h4>THE BRAND</h4>
            <Link to="/pages/about">Our Story</Link>
            <Link to="/pages/craftsmanship">Craftsmanship</Link>
            <Link to="/pages/sustainability">Sustainability</Link>
            <Link to="/blogs/journal">Journal</Link>
          </div>
          <div className="footer-col">
            <h4>CUSTOMER CARE</h4>
            <Link to="/pages/contact">Contact Us</Link>
            <Link to="/policies/shipping-policy">Shipping & Delivery</Link>
            <Link to="/policies/refund-policy">Returns</Link>
            <Link to="/pages/size-guide">Size Guide</Link>
            <Link to="/pages/faq">FAQ</Link>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        © 2025 STYLEIQ. ALL RIGHTS RESERVED.
      </div>
    </>
  );
}