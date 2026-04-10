import React from 'react';

const Workflow = () => {
  return (
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
  );
};

export default Workflow;
