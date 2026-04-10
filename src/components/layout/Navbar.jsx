import React, { useState } from 'react';

const Navbar = ({ onHome, onAbout, isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav id="main-nav" className={isMenuOpen ? 'menu-active' : ''}>
      <div className="logo-brand" onClick={() => { onHome(); closeMenu(); }} style={{ cursor: 'pointer' }}>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
          <circle cx="19" cy="19" r="18" stroke="#00d2d3" strokeWidth="1.5" fill="rgba(0,210,211,0.08)" />
          <path d="M7 22 Q10.5 16, 14 22 Q17.5 28, 21 22 Q24.5 16, 28 22" stroke="#00d2d3" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M7 17 Q10.5 11, 14 17 Q17.5 23, 21 17 Q24.5 11, 28 17" stroke="#00d2d3" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
          <circle cx="19" cy="19" r="2" fill="#00d2d3" />
          <line x1="19" y1="4" x2="19" y2="7" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="19" y1="31" x2="19" y2="34" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="4" y1="19" x2="7" y2="19" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="31" y1="19" x2="34" y2="19" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="logo-wordmark">
          <span className="logo-title">OCEAN</span><span className="logo-title-accent">TECH</span>
          <span className="logo-subtitle">ADVANCED MARINE SOLUTIONS</span>
        </span>
      </div>

      <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          onHome();
          closeMenu();
        }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); onAbout(); closeMenu(); }}>About</a>
        <a href="#workflow" onClick={closeMenu}>Workflow</a>
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.4rem 1.2rem' }} onClick={closeMenu}>Contact</a>
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginLeft: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
