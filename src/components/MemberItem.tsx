import React, { FC } from 'react';

interface MemberItemProps {
  name: string;
  avatar?: string;
  imageSrc?: string;
}

const MemberItem: FC<MemberItemProps> = ({ name, avatar, imageSrc }) => {
  // 优先使用 imageSrc，如果没有则使用 avatar
  const imageSource = imageSrc || avatar;
  
  return (
    <div className="member-item">
      <div className="member-avatar placeholder placeholder-circle">
        {imageSource ? (
          <img src={imageSource} alt={name} />
        ) : (
          <div className="avatar-placeholder">
            <div className="avatar-icon triangle"></div>
            <div className="avatar-icon star"></div>
            <div className="avatar-icon square"></div>
          </div>
        )}
      </div>
      <p className="member-name text-sm text-center">{name}</p>
    </div>
  );
};

export default MemberItem;
