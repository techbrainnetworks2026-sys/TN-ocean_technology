import React from 'react';

const ScrollProgress = ({ progress }) => {
  return (
    <div className="scroll-progress-bar" style={{ width: `${progress}%` }}></div>
  );
};

export default ScrollProgress;
