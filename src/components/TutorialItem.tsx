import React, { FC } from 'react';
import { Link } from 'gatsby';

interface TutorialItemProps {
  title: string;
  description: string;
  linkTo?: string;
}

const TutorialItem: FC<TutorialItemProps> = ({ title, description, linkTo }) => {
  const content = (
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
          </div>
        </div>
        <div className="tutorial-play">
          {linkTo && (
            <div className="arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo} className="tutorial-item-link">{content}</Link>;
  }

  return content;
};

export default TutorialItem;