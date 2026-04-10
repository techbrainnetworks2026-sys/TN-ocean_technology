import React from 'react';

const BackToTop = ({ show }) => {
  if (!show) return null;

  return (
    <button 
      className="back-to-top" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to Top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
};

export default BackToTop;
