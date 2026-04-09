import React, { useState, useEffect } from 'react';
import { productDetails } from './data/productDetails';
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';
import CompanyAboutPage from './components/CompanyAboutPage';
import ChatBox from './components/ChatBox';
import SearchBar from './components/SearchBar';
import Tooltip from './components/Tooltip';

// Product Data
const products = [
  { id: 1, title: 'Marine Research Data Analysis and Visualization Software', category: 'Data Analytics', desc: 'Advanced suite for multi-dimensional oceanographic data processing, 3D visualization, and statistical modeling.', img: '/assets/product-1.png' },
  { id: 2, title: 'Underwater Robotics Control and Data Acquisition Systems', category: 'Robotics', desc: 'Integrated control architectures for ROVs and AUVs, featuring real-time sensor fusion and high-bandwidth modules.', img: '/assets/product-2.png' },
  { id: 3, title: 'Oceanographic Data Management and Mapping Software', category: 'Data Analytics', desc: 'Secure, scalable platforms for cataloging, managing, and creating high-precision bathymetric maps.', img: '/assets/product-3.png' },
  { id: 4, title: 'Autonomous Underwater Vehicle (AUV) Fleet Management Systems', category: 'Management', desc: 'Enterprise-grade command center for managing multi-vehicle deployments and mission monitoring.', img: '/assets/product-4.png' },
  { id: 5, title: 'Offshore Operations Monitoring and Optimization Platforms', category: 'Management', desc: 'Real-time performance analytics and safety monitoring solutions for offshore energy installations.', img: 'https://images.unsplash.com/photo-1517088455889-bfa75135412c?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Coastal and Marine Environmental Monitoring Software', category: 'Environmental', desc: 'Predictive analytics software for tracking water quality, sediment transport, and coastal health indicators.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'Fisheries Management and Tracking Systems', category: 'Environmental', desc: 'Data-driven tools for sustainable fishery operations, biomass estimation, and regulatory monitoring.', img: '/assets/product-7.png' },
  { id: 8, title: 'Real-time Tide and Current Prediction Software', category: 'Data Analytics', desc: 'Hyper-local hydrodynamic modeling for high-precision tidal and current forecasting.', img: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=800&auto=format&fit=crop' },
  { id: 9, title: 'Ocean Exploration and Seafloor Mapping Tools', category: 'Data Analytics', desc: 'Next-generation sonar processing and sub-bottom profiling for detailed seafloor exploration.', img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=800&auto=format&fit=crop' },
  { id: 10, title: 'Ocean Energy Resource Assessment Software', category: 'Energy', desc: 'Site-specific evaluation tools for wave, tidal, and ocean thermal energy potential.', img: '/assets/product-10.png' },
  { id: 11, title: 'Submarine Cable Route Planning and Maintenance Systems', category: 'Management', desc: 'AIS-integrated route optimization and maintenance planning for trans-oceanic fiber optic infrastructure.', img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 12, title: 'Oil Spill Detection and Response Software', category: 'Environmental', desc: 'Automated satellite monitoring for rapid detection, spill modeling, and response coordination.', img: 'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?q=80&w=800&auto=format&fit=crop' },
  { id: 13, title: 'Autonomous Surface Vessel (ASV) Control Systems', category: 'Robotics', desc: 'AI-driven navigation and collision avoidance systems for unmanned surface platforms and survey vessels.', img: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop' },
  { id: 14, title: 'Ocean Satellite Image Processing and Analysis Tools', category: 'Data Analytics', desc: 'Sophisticated algorithms for analyzing sea surface temperature and maritime traffic from satellite imagery.', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop' },
  { id: 15, title: 'Integrated Ocean Observing System (IOOS) Platforms', category: 'Data Analytics', desc: 'Standardized data frameworks for regional and national ocean observation networks.', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' },
  { id: 16, title: 'Coral Reef Monitoring and Conservation Software', category: 'Environmental', desc: 'Advanced reef health assessment tools utilizing habitat classification and longitudinal monitoring.', img: '/assets/product-16.png' },
  { id: 17, title: 'Marine Protected Area (MPA) Management Systems', category: 'Management', desc: 'Strategic management platforms for planning, monitoring, and enforcing regulations in protected zones.', img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop' },
  { id: 18, title: 'Deep-Sea Mining Exploration and Planning Software', category: 'Energy', desc: 'Precision resource estimation and environmental impact modeling for mineral exploration and extraction.', img: 'https://images.unsplash.com/photo-1544465224-006f890f5b40?q=80&w=800&auto=format&fit=crop' },
  { id: 19, title: 'Ocean Data Archiving and Sharing Platforms', category: 'Data Analytics', desc: 'Cloud-native repositories for long-term preservation and secure sharing of oceanographic datasets.', img: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=800&auto=format&fit=crop' },
  { id: 20, title: 'Coastal Zone Management and Planning Software', category: 'Management', desc: 'Comprehensive GIS-based planning tools for urban development and ecosystem restoration in coastal areas.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop' },
];

// FAQ Data
const faqs = [
  { q: "How does your AUV fleet management system work?", a: "Our system uses acoustic telemetry and satellite uplinks to provide real-time positioning and mission status for multiple vehicles simultaneously." },
  { q: "Is your mapping software compatible with standard sonar formats?", a: "Yes, our tools seamlessly import data from major multibeam and side-scan sonar manufacturers including Kongsberg and Teledyne." },
  { q: "Can the environmental monitoring platform integrate third-party sensors?", a: "Absolutely. Our platform is built on an open architecture utilizing standard OGC SWE protocols to ingest data from virtually any marine sensor." },
  { q: "What kind of support is included with the software licenses?", a: "All licenses include 24/7 technical support, quarterly software updates, and access to our marine data cloud for backups." },
  { q: "Do you offer customized solutions for unique research projects?", a: "Yes, our engineering team routinely collaborates with academic institutions to develop custom software modules for specific marine research applications." }
];

const FAQItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <button className="faq-question" onClick={() => setIsActive(!isActive)}>
        {faq.q}
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-answer">
        <p>{faq.a}</p>
      </div>
    </div>
  );
};

function App() {
  const [view, setView] = useState('home'); // 'home', 'details', or 'about'
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Scroll Progress State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply Theme Toggle globally
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter Logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setView('details');
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedProduct(null);
  };

  if (view === 'about') {
    return <AboutPage onBack={handleBackToHome} />;
  }

  if (view === 'companyAbout') {
    return <CompanyAboutPage onBack={handleBackToHome} />;
  }

  if (view === 'details' && selectedProduct) {
    return (
      <ProductPage 
        product={selectedProduct} 
        details={productDetails[selectedProduct.id]} 
        onBack={handleBackToHome} 
      />
    );
  }

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to Top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}

      <nav id="main-nav">
        <div className="logo-brand" onClick={handleBackToHome} style={{cursor: 'pointer'}}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
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
        <div className="nav-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); setView('about'); }}>About</a>
          <a href="#workflow">Workflow</a>
          <a href="#products">Products</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn btn-primary" style={{padding: '0.4rem 1.2rem'}}>Contact</a>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
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

      {/* Hero Section */}
      <section id="hero">
        <div className="container">
          <h1 style={{maxWidth: '900px', margin: '0 auto 1.5rem'}}>Advanced Ocean Technologies for Marine Exploration and Management</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', color: '#e0e6ed'}}>
            Pioneering software and control systems that empower researchers, industries, and governments to understand and protect our oceans.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem'}}>
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <button onClick={() => setView('companyAbout')} className="btn" style={{background: 'rgba(0, 210, 211, 0.1)', border: '1px solid rgba(0, 210, 211, 0.3)'}}>Company About</button>
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

      {/* Trust Badges Bar */}
      <div className="trust-badges-bar">
        <div className="trust-badges-track">
          {[1, 2, 3].map(loop => (
            <React.Fragment key={loop}>
              <div className="trust-badge-item"><span>🏆</span> ISO 9001 Certified</div>
              <div className="trust-badge-item"><span>🌍</span> Trusted in 30+ Countries</div>
              <div className="trust-badge-item"><span>🛡️</span> Defense-Grade Security</div>
              <div className="trust-badge-item"><span>🔬</span> Academic Research Partner</div>
              <div className="trust-badge-item"><span>🌊</span> UN Ocean Decade Aligned</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* About Us */}
      <section id="about" style={{background: 'var(--bg-dark)'}}>
        <div className="container grid-2">
          <div>
            <h3>About Us</h3>
            <h2>Innovating at Depth</h2>
            <p>
              At OceanTech, we believe the future of our planet depends on our understanding of its oceans. We develop cutting-edge software and control systems designed specifically for the extreme challenges of the marine environment.
            </p>
            <p>
              From <Tooltip text="deep-sea robotics" tooltipText="Robots like AUVs and ROVs that explore extreme ocean depths" /> to global satellite data processing, our tools are trusted by leading marine research institutes and offshore industries worldwide to collect, analyze, and visualize critical ocean data.
            </p>
            <button onClick={() => setView('companyAbout')} className="btn" style={{marginTop: '1.5rem'}}>Company About</button>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop" alt="Underwater Robotics" style={{width: '100%', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0, 210, 211, 0.15)', border: '1px solid var(--card-border)'}} />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="workflow" style={{background: 'linear-gradient(180deg, var(--bg-dark) 0%, #051930 100%)'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h3>How We Work</h3>
          <h2>Our Data Pipeline</h2>
          <p style={{maxWidth: '600px', margin: '0 auto'}}>A seamless, end-to-end approach to transforming raw ocean environment signals into actionable intelligence.</p>
          
          <div className="workflow-flex">
            <div className="workflow-line"></div>
            <div className="workflow-step">
              <div className="step-number">1</div>
              <h4>We Collect Data</h4>
              <p style={{fontSize: '0.9rem', marginTop: '1rem'}}>Using sensors on ships, robotic submarines, and satellites, we gather real-time information from the ocean.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <h4>We Clean It Up</h4>
              <p style={{fontSize: '0.9rem', marginTop: '1rem'}}>Our smart software instantly filters out random errors and noise, ensuring the information is perfectly clear.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <h4>We Analyze It</h4>
              <p style={{fontSize: '0.9rem', marginTop: '1rem'}}>The system automatically detects patterns, predicts environmental changes, and maps out the seafloor for you.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">4</div>
              <h4>You Get Results</h4>
              <p style={{fontSize: '0.9rem', marginTop: '1rem'}}>Everything is delivered to you in easy-to-read, interactive dashboards and detailed 3D maps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{background: 'var(--bg-dark)'}}>
        <div className="container">
          <h3 style={{textAlign: 'center'}}>Our Solutions</h3>
          <h2 style={{marginBottom: '0.5rem'}}>Comprehensive Marine Tech Suite</h2>
          <p style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem'}}>
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'solution' : 'solutions'}
          </p>
          
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            products={products}
            onSelect={handleProductClick}
          />
          
          {filteredProducts.length === 0 && (
            <div style={{textAlign: 'center', padding: '4rem 0', color: '#B3C5D7'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>No solutions found</h3>
              <p>Try adjusting your search or category filters to find what you're looking for.</p>
              <button 
                className="btn btn-primary" 
                style={{marginTop: '1.5rem'}}
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="card product-card" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleProductClick(product)}
              >
                <div className="product-thumbnail" style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 210, 211, 0.2)', mixBlendMode: 'overlay'}}></div>
                  <div className="card-hover-overlay">
                    <span>Explore Technical Details</span>
                  </div>
                </div>
                <div className="product-content">
                  <h4 style={{marginBottom: '0.5rem', color: '#fff', fontSize: '1.1rem'}}>{product.title}</h4>
                  <p>{product.desc}</p>
                  <button className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.85rem'}}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{background: 'linear-gradient(0deg, var(--bg-dark) 0%, #051930 100%)'}}>
        <div className="container grid-2">
          <div>
            <h3>Get in Touch</h3>
            <h2>Start Your Next Marine Project</h2>
            <p style={{marginBottom: '2rem'}}>
              Whether you're mapping the deep sea, managing coastal resources, or operating an underwater vehicle fleet, our team is ready to provide the software solutions you need.
            </p>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
              <div style={{color: 'var(--teal-accent)', fontSize: '1.2rem'}}>✉</div>
              <p style={{margin: 0}}>contact@oceantech.io</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div style={{color: 'var(--teal-accent)', fontSize: '1.2rem'}}>☎</div>
              <p style={{margin: 0}}>+1 (555) 019-8432</p>
            </div>
          </div>
          <div className="card">
            <h3 style={{color: '#fff', marginBottom: '1.5rem'}}>Send a Message</h3>
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Dr. Jane Smith" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="jane.smith@institute.edu" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{background: 'var(--bg-dark)'}}>
        <div className="container">
          <h3 style={{textAlign: 'center'}}>FAQ</h3>
          <h2>Frequently Asked Questions</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{background: 'linear-gradient(180deg, var(--bg-dark) 0%, #051930 100%)'}}>
        <div className="container">
          <h3 style={{textAlign: 'center', color: 'var(--teal-accent)'}}>Client Success</h3>
          <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Trusted by Industry Leaders</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <span className="testimonial-quote-icon">"</span>
              <p className="testimonial-text">
                "OceanTech's AUV fleet management system revolutionized our deep-sea mapping operations. We've reduced mission planning time by 40% while doubling our data collection yields."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">DR</div>
                <div className="testimonial-author-info">
                  <h4>Dr. David Ross</h4>
                  <p>Director of Marine Robotics, Global Ocean Institute</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <span className="testimonial-quote-icon">"</span>
              <p className="testimonial-text">
                "The coastal erosion modeling tools provided unparalleled accuracy for our urban planning department. It's an indispensable asset for sustainable coastal development."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SL</div>
                <div className="testimonial-author-info">
                  <h4>Sarah Lin</h4>
                  <p>Chief Urban Planner, Coastal Development Authority</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <span className="testimonial-quote-icon">"</span>
              <p className="testimonial-text">
                "Exceptional software. The real-time sensor fusion capabilities are robust, and the cloud archiving platform makes global collaboration effortless."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MJ</div>
                <div className="testimonial-author-info">
                  <h4>Mark Johnson</h4>
                  <p>VP of Operations, DeepSea Mineral Exploration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
      <ChatBox />
    </>
  );
}

export default App;
