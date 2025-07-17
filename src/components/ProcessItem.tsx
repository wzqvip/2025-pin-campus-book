import React, { FC } from 'react';

interface ProcessItemProps {
    imageSrc: JSX.Element;
}

const ProcessItem: FC<ProcessItemProps> = ({ imageSrc }) => {
  return (
    <div className="process-item card">
      <div className="process-content">
        <div className="process-images">
          <div className="banner-image">
            {imageSrc ? (
               imageSrc
            ) : (
              <div className="image-placeholder">
                <div className="placeholder-icon"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;