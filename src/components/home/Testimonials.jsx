import React from 'react';

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
