export function TrustBar() {
  const items = [
    {
      label: 'PREMIUM FABRIC',
      sub: 'Sourced. Curated. Refined.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
    },
    {
      label: 'MASTER TAILORED',
      sub: 'By Expert Artisans',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    },
    {
      label: 'AUTHENTICITY GUARANTEED',
      sub: 'Our Promise to You',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      label: 'WORLDWIDE DELIVERY',
      sub: 'Secure & Tracked Shipping',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="trust-bar">
      {items.map((item) => (
        <div key={item.label} className="trust-item">
          <div className="trust-icon">{item.icon}</div>
          <div>
            <h4>{item.label}</h4>
            <p>{item.sub}</p>
          </div>
        </div>
      ))}
    </section>
  );
}