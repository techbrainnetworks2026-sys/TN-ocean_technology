import React, { useState } from 'react';
import Logo from '@/components/ui/Logo';

const Navbar = ({ onHome, onAbout, isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav id="main-nav" className={isMenuOpen ? 'menu-active' : ''}>
      <div className="logo-brand" onClick={() => { onHome(); closeMenu(); }} style={{ cursor: 'pointer' }}>
        <Logo size={38} />
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
