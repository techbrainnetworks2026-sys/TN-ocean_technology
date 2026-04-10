import React from 'react';
import Logo from '@/components/ui/Logo';

const Footer = ({ onHome }) => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo-brand" style={{marginBottom: '1rem', cursor: 'default'}}>
            <Logo size={32} />
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
