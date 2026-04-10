import React, { useState } from 'react';

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

const FAQ = ({ faqs }) => {
  return (
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
  );
};

export default FAQ;
