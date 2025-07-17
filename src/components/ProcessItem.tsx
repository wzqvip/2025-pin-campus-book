import React, { FC } from 'react';

interface ProcessItemProps {
  hasOverlay?: boolean;
  overlayText?: string;
  imageSrc?: string;
}

const ProcessItem: FC<ProcessItemProps> = ({ hasOverlay = false, overlayText = '', imageSrc }) => {
  return (
    <div className="process-item card">
      <div className="process-content">
        <div className="process-images">
          <div className="banner-image">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt="制作过程"
                loading="lazy" // 懒加载优化
              />
            ) : (
              <div className="image-placeholder">
                <div className="placeholder-icon"></div>
              </div>
            )}
          </div>
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