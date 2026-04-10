import React, { useEffect } from 'react';

const ProductPage = ({ product, details, onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!product || !details) return null;

  return (
    <div className="product-page-wrapper">

      {/* ── HERO ─────────────────────────────── */}
      <section className="product-hero" style={{
        backgroundImage: `linear-gradient(160deg, rgba(2,11,20,0.55) 0%, rgba(2,11,20,0.92) 70%), url(${product.img})`
      }}>
        <div className="container">
          <div className="pp-hero-content">
            <span className="section-pill">📌 Product Deep Dive</span>
            <h1>{product.title}</h1>
            <p className="hero-description">{product.desc}</p>
            <div className="hero-cta-group">
              <button className="btn back-btn-inline" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(0,210,211,0.1)', border: '1px solid rgba(0,210,211,0.2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Solutions
              </button>
              <br/>
              {/* <a href="mailto:contact@oceantech.io" className="btn btn-primary">Request a Demo</a> */}
              <a href="#pp-specs" className="btn">View Technical Specs</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────── */}
      {details.overview && (
        <section className="pp-section pp-overview-section">
          <div className="container">
            <div className="pp-section-head">
              <span className="section-pill">📌 Overview</span>
              <h2>What Is This Solution?</h2>
            </div>
            <div className="pp-overview-card card">
              <p className="pp-overview-text">{details.overview}</p>
              <div className="pp-overview-stats">
                {(details.stats || [
                  { val: '99.9%', lbl: 'Uptime SLA' },
                  { val: '<50ms', lbl: 'Data Latency' },
                  { val: 'AES-256', lbl: 'Encryption' },
                  { val: 'Global', lbl: 'Cloud Access' },
                ]).map((s, i) => (
                  <div key={i} className="pp-stat">
                    <span className="pp-stat-val">{s.val}</span>
                    <span className="pp-stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── KEY FEATURES ─────────────────────── */}
      <section className="pp-section" style={{ background: '#01050a' }}>
        <div className="container">
          <div className="pp-section-head">
            <span className="section-pill">🔑 Key Features</span>
            <h2>What This Platform Delivers</h2>
            <p>Core capabilities engineered for precision, scale, and reliability.</p>
          </div>
          <div className="pp-features-grid">
            {details.features.map((f, i) => (
              <div key={i} className="pp-feature-card card">
                <div className="pp-feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS + ADVANTAGES ────────────── */}
      <section id="pp-specs" className="pp-section pp-ba-section">
        <div className="container">
          <div className="pp-ba-grid">
            <div className="pp-ba-col">
              <span className="section-pill">🎯 Benefits</span>
              <h2>Why It Matters</h2>
              <div className="pp-benefit-list">
                {details.benefits.map((b, i) => (
                  <div key={i} className="pp-benefit-row">
                    <span className="pp-benefit-check">✓</span>
                    <div>
                      {typeof b === 'object' ? (
                        <>
                          <strong>{b.title}</strong>
                          <p>{b.desc}</p>
                        </>
                      ) : <p style={{margin:0}}>{b}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pp-ba-col">
              <span className="section-pill">⭐ Advantages</span>
              <h2>Our Competitive Edge</h2>
              <div className="pp-adv-list">
                {details.advantages.map((a, i) => (
                  <div key={i} className="pp-adv-row">
                    <span className="pp-adv-icon">{typeof a === 'object' ? a.icon : '◈'}</span>
                    <div>
                      {typeof a === 'object' ? (
                        <>
                          <strong>{a.title}</strong>
                          <p>{a.desc}</p>
                        </>
                      ) : <p style={{margin:0}}>{a}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────── */}
      <section className="pp-section" style={{ background: '#01050a' }}>
        <div className="container">
          <div className="pp-section-head">
            <span className="section-pill">⚙️ System Architecture</span>
            <h2>How It Works</h2>
          </div>
          <div className="pp-how-card card">
            <p className="pp-how-desc">{details.howItWorks}</p>
            <div className="pp-how-steps">
              {(details.steps || ['Ingest', 'Process', 'Analyze', 'Visualize']).map((step, i) => (
                <div key={i} className="pp-step">
                  <div className="pp-step-num">{i + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ─────────────────────── */}
      {details.applications && (
        <section className="pp-section pp-app-section">
          <div className="container">
            <div className="pp-section-head">
              <span className="section-pill">🌍 Applications</span>
              <h2>Where It's Deployed</h2>
              <p>Real-world use cases across industries and research domains.</p>
            </div>
            <div className="pp-apps-grid">
              {details.applications.map((app, i) => (
                <div key={i} className="pp-app-chip">
                  <span className="pp-app-icon">{app.icon}</span>
                  <span>{app.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FUTURE SCOPE ─────────────────────── */}
      <section className="pp-section pp-future-section" style={{ background: '#01050a' }}>
        <div className="container">
          <div className="pp-section-head">
            <span className="section-pill">🔮 Future Scope</span>
            <h2>R&amp;D Innovation Roadmap</h2>
            <p>What's next on our engineering and research agenda.</p>
          </div>
          <div className="pp-future-grid">
            {details.future.map((f, i) => (
              <div key={i} className="pp-future-card card">
                <div className="pp-future-index">0{i + 1}</div>
                <div className="pp-future-text">
                  {typeof f === 'object' ? f.label : f}
                </div>
                <div className="pp-future-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCLUSION ───────────────────────── */}
      <section className="pp-conclusion-section">
        <div className="container">
          <div className="pp-conclusion-inner">
            <span className="section-pill">🚀 Conclusion</span>
            <h2>Ready to Transform Your Operations?</h2>
            <p className="pp-conclusion-text">
              {details.conclusion || `${product.title} is a mission-critical platform that empowers researchers, governments, and industry professionals to make precise, data-driven decisions at scale. Built for the complexity of the ocean environment — and the ambition of those who work within it.`}
            </p>
            <div className="conclusion-cta">
              {/* <a href="mailto:contact@oceantech.io" className="btn btn-primary">Request a Demo</a> */}
              <button className="btn" onClick={onBack}>Explore Other Solutions</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductPage;
