import React, { FC } from 'react';

interface ProcessItemProps {
  hasOverlay?: boolean;
  overlayText?: string;
}

const ProcessItem: FC<ProcessItemProps> = ({ hasOverlay = false, overlayText = '' }) => {
  return (
    <div className="process-item card">
      <div className="process-content">
        <div className="process-icons">
          <div className="process-icon triangle placeholder"></div>
          <div className="process-icon star placeholder"></div>
          <div className="process-icon square placeholder"></div>
        </div>
        {hasOverlay && (
          <div className="process-overlay">
            <span className="overlay-text">{overlayText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessItem;