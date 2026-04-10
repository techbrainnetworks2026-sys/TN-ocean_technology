import React from 'react';

const Hero = ({ onExplore, onCompanyAbout }) => {
  return (
    <section id="hero">
      <div className="container">
        <h1 style={{maxWidth: '900px', margin: '0 auto 1.5rem'}}>Advanced Ocean Technologies for Marine Exploration and Management</h1>
        <p style={{fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', color: '#e0e6ed'}}>
          Pioneering software and control systems that empower researchers, industries, and governments to understand and protect our oceans.
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem'}}>
          <a href="#products" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Explore Products</a>
          <button onClick={onCompanyAbout} className="btn" style={{background: 'rgba(0, 210, 211, 0.1)', border: '1px solid rgba(0, 210, 211, 0.3)'}}>Company About</button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
