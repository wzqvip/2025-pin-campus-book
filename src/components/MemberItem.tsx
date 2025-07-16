import React, { FC } from 'react';

interface MemberItemProps {
  name: string;
  avatar?: string;
}

const MemberItem: FC<MemberItemProps> = ({ name, avatar }) => {
  return (
    <div className="member-item">
      <div className="member-avatar placeholder placeholder-circle">
        {avatar ? (
          <img src={avatar} alt={name} />
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
