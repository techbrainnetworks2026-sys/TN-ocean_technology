import React from 'react';

const ProductModal = ({ product, details, onClose }) => {
  if (!product || !details) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <div className="modal-image" style={{ backgroundImage: `url(${product.img})` }}>
            <div className="modal-image-overlay"></div>
          </div>
          <div className="modal-title-box">
            <h3>Product Insight</h3>
            <h2>{product.title}</h2>
          </div>
        </div>

        <div className="modal-body-grid">
          <div className="modal-section">
            <h4><span className="section-icon">💎</span> Benefits & Advantages</h4>
            <div className="section-content">
              <h5>Key Benefits:</h5>
              <ul>
                {details.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <h5 style={{ marginTop: '1rem' }}>Unique Advantages:</h5>
              <ul>
                {details.advantages.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>

          <div className="modal-section">
            <h4><span className="section-icon">🎯</span> Strategic Goals</h4>
            <div className="section-content">
              <ul>
                {details.goals.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
            </div>
          </div>

          <div className="modal-section full-width">
            <h4><span className="section-icon">⚙️</span> How It Works</h4>
            <div className="section-content">
              <p>{details.howItWorks}</p>
            </div>
          </div>

          <div className="modal-section full-width">
            <h4><span className="section-icon">🚀</span> Future Innovations</h4>
            <div className="section-content">
              <div className="innovation-grid">
                {details.future.map((f, i) => (
                  <div key={i} className="innovation-item">
                    <span className="innovation-bullet"></span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close Insights</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
