import React, { useEffect } from 'react';

const AboutPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: '📡', title: 'Real-Time Data Processing', desc: 'Collect and analyze ocean data instantly from multiple sources like sensors, satellites, and autonomous vehicles.' },
    { icon: '📊', title: 'Advanced Data Visualization', desc: 'Interactive dashboards, heatmaps, and 3D ocean mapping for better insights into complex marine datasets.' },
    { icon: '🤖', title: 'AI & Machine Learning Integration', desc: 'Predict ocean behavior, detect anomalies, and automate analysis using state-of-the-art AI models.' },
    { icon: '🌐', title: 'Integrated Multi-System Platform', desc: 'Combines AUVs, ASVs, satellite data, and monitoring systems into one unified platform.' },
    { icon: '🧭', title: 'Geospatial Mapping & GIS Support', desc: 'Accurate mapping of seafloor, coastal zones, and marine environments with full GIS compatibility.' },
    { icon: '⚙️', title: 'Automation & Remote Control', desc: 'Control underwater and surface vehicles remotely with precision and low-latency telemetry.' },
    { icon: '🔒', title: 'Secure Data Management', desc: 'Cloud-based storage with AES-256 encryption, secure sharing, and granular access control.' },
    { icon: '📈', title: 'Scalable Architecture', desc: 'Easily expandable system designed for small research teams up to large enterprise deployments.' },
  ];

  const benefits = [
    { icon: '✅', title: 'Improved Decision Making', desc: 'Data-driven insights help researchers and industries make accurate, evidence-based decisions.' },
    { icon: '⏱️', title: 'Time Efficiency', desc: 'Automation reduces manual effort and dramatically speeds up marine operations.' },
    { icon: '💰', title: 'Cost Reduction', desc: 'Optimized resource usage and predictive maintenance lower overall operational costs.' },
    { icon: '🌍', title: 'Environmental Protection', desc: 'Helps monitor pollution, protect marine life, and model climate change impacts.' },
    { icon: '🚀', title: 'Enhanced Productivity', desc: 'Streamlined workflows and automation increase efficiency across all marine operations.' },
    { icon: '🔍', title: 'Better Accuracy', desc: 'High-quality sensor fusion ensures precise analysis, forecasting, and reporting.' },
  ];

  const advantages = [
    { icon: '🌊', title: 'All-in-One Ocean Platform', desc: 'Covers research, monitoring, mapping, and control systems in a single unified solution.' },
    { icon: '🔗', title: 'Seamless Integration', desc: 'Works with multiple devices and data sources without complex configuration.' },
    { icon: '📡', title: 'Real-Time Monitoring', desc: 'Instant updates on ocean conditions and operations for situational awareness.' },
    { icon: '🧠', title: 'Smart Analytics', desc: 'AI-powered insights deliver predictive capabilities far beyond traditional tools.' },
    { icon: '🌐', title: 'Global Accessibility', desc: 'Cloud-based system accessible from any device anywhere on the planet.' },
    { icon: '🛠️', title: 'Customizable Modules', desc: 'Users select and configure features tailored to their specific research or operational needs.' },
  ];

  const scope = [
    { icon: '🧪', title: 'Marine Research Institutions', desc: 'Oceanographic studies, climate research, and biodiversity analysis.' },
    { icon: '⚓', title: 'Offshore Industries', desc: 'Oil & gas, renewable energy, and marine infrastructure monitoring.' },
    { icon: '🛰️', title: 'Government & Defense', desc: 'Coastal surveillance, maritime security, and naval operations.' },
    { icon: '🌱', title: 'Environmental Organizations', desc: 'Conservation, pollution tracking, and ecosystem monitoring programs.' },
    { icon: '🎣', title: 'Fisheries & Aquaculture', desc: 'Fish stock tracking, sustainable fishing practices, and resource management.' },
    { icon: '🔌', title: 'Telecommunication', desc: 'Submarine cable route planning, laying, and long-term maintenance.' },
    { icon: '⚡', title: 'Ocean Energy Sector', desc: 'Wave, tidal, and ocean thermal energy resource assessment.' },
    { icon: '🧭', title: 'Future Expansion', desc: 'Integration with smart cities, global climate AI models, and ocean observing networks.' },
  ];

  return (
    <div className="about-page-wrapper">
      {/* Sub Nav */}
      <nav className="sub-page-nav">
        <button className="btn back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </button>
        <div className="logo-brand sub-logo-brand">
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
          </span>
        </div>
      </nav>

      {/* About Page Hero */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-tag">🌊 Company Overview</div>
            <h1>Ocean Technologies</h1>
            <p className="about-hero-lead">
              Advanced Ocean Technologies for Marine Exploration and Management
            </p>
            <p className="about-hero-sub">
              A powerful, scalable, and intelligent platform designed to revolutionize how we explore, monitor, and manage the world's oceans — bridging technology and marine science to build a sustainable, data-driven future.
            </p>
            <div className="about-stats-bar">
              <div className="about-stat"><span className="about-stat-val">20+</span><span className="about-stat-lbl">Integrated Solutions</span></div>
              <div className="about-stat-div"></div>
              <div className="about-stat"><span className="about-stat-val">99.9%</span><span className="about-stat-lbl">System Uptime</span></div>
              <div className="about-stat-div"></div>
              <div className="about-stat"><span className="about-stat-val">8</span><span className="about-stat-lbl">Industry Sectors</span></div>
              <div className="about-stat-div"></div>
              <div className="about-stat"><span className="about-stat-val">Global</span><span className="about-stat-lbl">Cloud Access</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="about-section">
        <div className="container">
          <div className="about-section-head">
            <span className="section-pill">🔑 Key Features</span>
            <h2>What Our Platform Delivers</h2>
            <p>Eight core technology pillars that form the backbone of every OceanTech deployment.</p>
          </div>
          <div className="about-cards-grid-4">
            {features.map((f, i) => (
              <div key={i} className="about-feature-card card">
                <div className="about-card-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="about-section" style={{ background: '#01050a' }}>
        <div className="container">
          <div className="about-section-head">
            <span className="section-pill">🎯 Benefits</span>
            <h2>Why Organizations Choose OceanTech</h2>
            <p>Real-world outcomes our clients achieve from day one of deployment.</p>
          </div>
          <div className="about-cards-grid-3">
            {benefits.map((b, i) => (
              <div key={i} className="about-benefit-card">
                <div className="benefit-icon-large">{b.icon}</div>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="about-section">
        <div className="container">
          <div className="about-section-head">
            <span className="section-pill">⭐ Advantages</span>
            <h2>Our Competitive Edge</h2>
            <p>What sets OceanTech apart from conventional marine software platforms.</p>
          </div>
          <div className="advantages-split">
            {advantages.map((a, i) => (
              <div key={i} className="advantage-row">
                <div className="advantage-row-icon">{a.icon}</div>
                <div className="advantage-row-line"></div>
                <div className="advantage-row-text">
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="about-section scope-section" style={{ background: '#01050a' }}>
        <div className="container">
          <div className="about-section-head">
            <span className="section-pill">🌍 Scope</span>
            <h2>Who We Serve</h2>
            <p>OceanTech is deployed across diverse industries and government sectors worldwide.</p>
          </div>
          <div className="about-cards-grid-4">
            {scope.map((s, i) => (
              <div key={i} className="scope-card card">
                <div className="scope-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="conclusion-section">
        <div className="container">
          <div className="conclusion-inner">
            <span className="section-pill">🚀 Conclusion</span>
            <h2>Built for the Future of the Ocean</h2>
            <p className="conclusion-lead">
              <strong>Ocean Technologies</strong> is a powerful, scalable, and intelligent platform designed to revolutionize how we explore, monitor, and manage the oceans. It bridges technology and marine science to create a <strong>sustainable</strong> and <strong>data-driven future</strong> for every stakeholder — from coastal researchers to global energy enterprises.
            </p>
            <div className="conclusion-cta">
              <button className="btn btn-primary" onClick={onBack}>Explore Our Products</button>
              <a href="mailto:contact@oceantech.io" className="btn">Contact Our Team</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="sub-footer">
        <div className="container" style={{ padding: '1rem 2rem' }}>
          <p>&copy; {new Date().getFullYear()} OceanTech Inc. — Advanced Marine Solutions.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
