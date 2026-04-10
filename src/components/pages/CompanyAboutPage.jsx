import React, { useEffect } from 'react';

const CompanyAboutPage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    "Aerospace", "Agriculture", "Automotive", "Chemical", "Defence Technology",
    "Education", "Energy & Utilities", "Entertainment and Media", "Finance",
    "Food Technology", "Healthcare", "Infrastructure", "Logistics", "Manufacturing",
    "Ocean Technology", "Oil and Gas", "Pharmaceutical", "Retail", "Sports",
    "Technology", "Telecommunication", "Textile", "Transportation", "Travel"
  ];

  const services = [
    "Software Development",
    "Hardware Engineering",
    "Product Design",
    "Research & Development"
  ];

  return (
    <div className="company-about-page" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      
      {/* Hero Section */}
      <section className="company-hero">
        <div className="hero-background-gradient"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
          <button className="btn back-btn-inline" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(0,210,211,0.1)', border: '1px solid rgba(0,210,211,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to OceanTech
          </button>
          <div className="pill-badge" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>
            <span className="pulse-dot"></span>
            About Us
          </div>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Innovating the Future of <br/><span className="gradient-text">Global Technology</span>
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem', color: '#B3C5D7', lineHeight: '1.8' }}>
            Techbrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing.
          </p>
        </div>
      </section>

      {/* V-M-P Section (Vision, Mission, Passion) */}
      <section className="vmp-section" style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container">
          <div className="vmp-grid">
            
            <div className="card vmp-card">
              <div className="vmp-icon-wrapper">
                <span className="vmp-icon">👁️</span>
                <h3 className="vmp-title">Vision</h3>
              </div>
              <p className="vmp-text">
                "We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world."
              </p>
            </div>

            <div className="card vmp-card">
              <div className="vmp-icon-wrapper">
                 <span className="vmp-icon">🎯</span>
                 <h3 className="vmp-title">Mission</h3>
              </div>
              <p className="vmp-text">
                "We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape."
              </p>
            </div>

            <div className="card vmp-card">
              <div className="vmp-icon-wrapper">
                 <span className="vmp-icon">❤️</span>
                 <h3 className="vmp-title">Passion</h3>
              </div>
              <p className="vmp-text">
                "Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team / Impact Section */}
      <section className="impact-section" style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, #051930 100%)', padding: '6rem 0' }}>
        <div className="container">
          <div className="impact-content text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ color: 'var(--teal-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem' }}>Our Team & Global Impact</h3>
            <div className="impact-icons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '2rem', marginBottom: '2rem', opacity: 0.8 }}>
               🌍 🚀 💡 📊 🤖 🌐 ⚙️
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.4' }}>
              Revolutionizing Technology Across <br/>
              <span className="gradient-text">24 Industries</span> & <span className="gradient-text">30 Countries</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#e0e6ed', lineHeight: '1.8', marginBottom: '3rem' }}>
              We are revolutionizing the future of technology with <strong>480 innovative products</strong> spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
            </p>
            
            <div className="founder-card card" style={{ maxWidth: '400px', margin: '0 auto', background: 'rgba(5, 25, 48, 0.6)', border: '1px solid rgba(0, 210, 211, 0.2)' }}>
              <div className="founder-avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--teal-accent), #005f73)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#fff' }}>RA</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.2rem', color: '#fff' }}>Ramkumar Arunachalam</h4>
              <p style={{ color: 'var(--teal-accent)', fontSize: '0.9rem', margin: 0 }}>Founder of Techbrain Networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" style={{ background: 'var(--bg-dark)', padding: '6rem 0' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: '4rem', alignItems: 'flex-start' }}>
            
            <div className="contact-intro">
               <h3 style={{ color: 'var(--teal-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1rem' }}>Get In Touch With Us!</h3>
               <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Tailored Solutions for Every Need.</h2>
               <p style={{ fontSize: '1.1rem', color: '#B3C5D7', lineHeight: '1.7', marginBottom: '2rem' }}>
                 Whether you are in education, finance, transportation, retail or health care, we have a solution for you. We develop both large and small projects and our solutions are always tailored to your needs - both in terms of budget and scope.
               </p>
               
               <div className="contact-direct" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '3rem' }}>
                 <div className="direct-item card" style={{ padding: '1.5rem', background: 'rgba(0, 210, 211, 0.05)', border: '1px solid rgba(0, 210, 211, 0.1)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <span style={{ fontSize: '1.5rem', color: 'var(--teal-accent)' }}>✉️</span>
                   <div>
                     <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</p>
                     <p style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: '500' }}>contact@techbrainnetworks.com</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="contact-form-wrapper card form-card">
              <form className="advanced-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Mobile No *</label>
                    <input type="tel" className="form-control" required />
                  </div>
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                  <div className="form-group">
                    <label>Industries</label>
                    <select className="form-control" style={{ WebkitAppearance: 'none', background: 'rgba(5, 25, 48, 0.6) url("data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%2300d2d3\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'></path></svg>") no-repeat right 1rem center / 1.2rem' }}>
                      <option value="">Select Industry</option>
                      {industries.map((ind, idx) => <option key={idx} value={ind}>{ind}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Choose the service</label>
                    <select className="form-control" style={{ WebkitAppearance: 'none', background: 'rgba(5, 25, 48, 0.6) url("data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%2300d2d3\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'></path></svg>") no-repeat right 1rem center / 1.2rem' }}>
                      <option value="">Select Service</option>
                      {services.map((srv, idx) => <option key={idx} value={srv}>{srv}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1.5rem' }}>
                  <label>Special Note</label>
                  <textarea className="form-control" rows="4" placeholder="How can we help bring your vision to life?"></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '1rem', fontSize: '1.1rem' }}>Submit Inquiry</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Global Presence & Capabilities (Addresses & Lists) */}
      <section className="global-presence" style={{ background: 'linear-gradient(0deg, var(--bg-dark) 0%, #051930 100%)', padding: '6rem 0' }}>
        <div className="container">
          
          {/* Addresses */}
          <div className="address-section" style={{ marginBottom: '5rem' }}>
            <h3 style={{ textAlign: 'center', color: 'var(--teal-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1rem' }}>Global Presence</h3>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Our Global Offices</h2>
            
            <div className="address-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="card address-card" style={{ padding: '2.5rem', background: 'rgba(0, 210, 211, 0.05)', border: '1px solid rgba(0, 210, 211, 0.2)' }}>
                 <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🇮🇳</div>
                 <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>India</h3>
                 <h4 style={{ color: 'var(--teal-accent)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '500' }}>Thanjavur</h4>
                 <p style={{ color: '#B3C5D7', lineHeight: '1.8' }}>
                   6/12 Papa vaikal Street Ayyampettai<br/>
                   Papanasam Thanjavur<br/>
                   Tamilnadu India.
                 </p>
              </div>

              <div className="card address-card" style={{ padding: '2.5rem', background: 'rgba(0, 210, 211, 0.05)', border: '1px solid rgba(0, 210, 211, 0.2)' }}>
                 <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🇬🇧</div>
                 <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>United Kingdom</h3>
                 <h4 style={{ color: 'var(--teal-accent)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '500' }}>London</h4>
                 <p style={{ color: '#B3C5D7', lineHeight: '1.8' }}>
                   71-75 Shelton Street, Covent Garden,<br/>
                   London, WC2H 9JQ, United Kingdom.
                 </p>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem' }}>
            <div className="industries-list">
               <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 211, 0.2)' }}>Industries We Serve</h3>
               <div className="chip-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                 {industries.map((ind, idx) => (
                   <span key={idx} className="industry-chip" style={{ 
                     padding: '0.6rem 1.2rem', 
                     background: 'rgba(5, 25, 48, 0.5)', 
                     border: '1px solid rgba(0, 210, 211, 0.3)', 
                     borderRadius: '20px', 
                     fontSize: '0.9rem',
                     color: '#B3C5D7',
                     transition: 'all 0.3s'
                   }}>
                     {ind}
                   </span>
                 ))}
               </div>
            </div>

            <div className="services-list">
               <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 211, 0.2)' }}>Core Services</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 {services.map((srv, idx) => (
                   <div key={idx} className="service-item card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0, 210, 211, 0.05)' }}>
                     <span style={{ color: 'var(--teal-accent)' }}>✓</span>
                     <span style={{ color: '#fff', fontWeight: '500' }}>{srv}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CompanyAboutPage;
