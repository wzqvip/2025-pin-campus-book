import React, { FC } from 'react';

interface SectionHeaderProps {
  title: string;
  showArrow?: boolean;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, showArrow = false }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">
        {title}
        {showArrow && <span className="section-arrow">→</span>}
      </h2>
    </div>
  );
};

export default SectionHeader;