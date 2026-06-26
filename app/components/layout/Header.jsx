import {Link, NavLink} from 'react-router';

export function Header({shop}) {
  return (
    <header className="site-header">
      <Link to="/" className="header-logo">
        STYLEIQ
      </Link>

      <nav className="header-nav">
        <NavLink to="/collections/men">MEN</NavLink>
        <NavLink to="/collections/women">WOMEN</NavLink>
        <NavLink to="/collections/unisex">UNISEX</NavLink>
        <NavLink to="/collections">COLLECTIONS</NavLink>
        <NavLink to="/pages/lookbook">LOOKBOOK</NavLink>
      </nav>

      <div className="header-icons">
        <Link to="/search" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7"/>
            <line x1="16.5" y1="16.5" x2="22" y2="22"/>
          </svg>
        </Link>
        <Link to="/account" aria-label="Account">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </Link>
        <Link to="/cart" aria-label="Cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </Link>
      </div>
    </header>
  );
}