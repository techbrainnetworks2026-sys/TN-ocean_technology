import React from 'react';

const Footer = ({ onHome }) => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo-brand" style={{marginBottom: '1rem', cursor: 'default'}}>
            <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
              <circle cx="19" cy="19" r="18" stroke="#00d2d3" strokeWidth="1.5" fill="rgba(0,210,211,0.08)"/>
              <path d="M7 22 Q10.5 16, 14 22 Q17.5 28, 21 22 Q24.5 16, 28 22" stroke="#00d2d3" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M7 17 Q10.5 11, 14 17 Q17.5 23, 21 17 Q24.5 11, 28 17" stroke="#00d2d3" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"/>
              <circle cx="19" cy="19" r="2" fill="#00d2d3"/>
              <line x1="19" y1="4" x2="19" y2="7" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="19" y1="31" x2="19" y2="34" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="4" y1="19" x2="7" y2="19" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="31" y1="19" x2="34" y2="19" stroke="#00d2d3" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="logo-wordmark">
              <span className="logo-title">OCEAN</span><span className="logo-title-accent">TECH</span>
              <span className="logo-subtitle">ADVANCED MARINE SOLUTIONS</span>
            </span>
          </div>
          <p>Advanced Ocean Technologies for Marine Exploration and Management</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onHome(); }}>Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#workflow">How We Work</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul className="footer-links">
            <li><a href="#products">Data Analysis</a></li>
            <li><a href="#products">Robotics Control</a></li>
            <li><a href="#products">Environmental</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul className="footer-links" style={{display: 'flex', gap: '1rem'}}>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OceanTech Inc. All rights reserved. Designed for the deep.</p>
      </div>
    </footer>
  );
};

export default Footer;
