import React from 'react';

const TrustBadges = () => {
  return (
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
  );
};

export default TrustBadges;
