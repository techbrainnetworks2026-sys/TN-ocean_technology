import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;
