import React from 'react';
import Tooltip from '../ui/Tooltip';

const AboutSection = ({ onCompanyAbout }) => {
  return (
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
          <button onClick={onCompanyAbout} className="btn" style={{marginTop: '1.5rem'}}>Company About</button>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop" alt="Underwater Robotics" style={{width: '100%', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0, 210, 211, 0.15)', border: '1px solid var(--card-border)'}} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
