import React, { FC } from 'react';

interface TutorialItemProps {
  title: string;
  description: string;
  date: string;
  duration: string;
}

const TutorialItem: FC<TutorialItemProps> = ({ title, description, date, duration }) => {
  return (
    <div className="tutorial-item card">
      <div className="tutorial-content">
        <div className="tutorial-icon">
          <div className="tutorial-icon-triangle placeholder"></div>
          <div className="tutorial-icon-star placeholder"></div>
          <div className="tutorial-icon-square placeholder"></div>
        </div>
        <div className="tutorial-info">
          <h3 className="tutorial-title">{title}</h3>
          <p className="tutorial-description text-light">{description}</p>
          <div className="tutorial-meta text-sm text-light">
            <span>{date}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </div>
        <div className="tutorial-play">
          <button className="play-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialItem;