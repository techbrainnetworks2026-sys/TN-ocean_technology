import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, tooltipText }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)} // for mobile
      style={{
        borderBottom: '1px dotted var(--teal-accent)',
        cursor: 'help',
        position: 'relative',
        display: 'inline-block'
      }}
    >
      {text}
      {isVisible && (
        <span className="tooltip-bubble">
          {tooltipText}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
