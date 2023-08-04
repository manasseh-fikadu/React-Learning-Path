import React from 'react';
import Avatar from './Avatar';
import Info from './Info';

interface Profile {
  name: string;
  bio: string;
  website?: string;
}

interface CardProps {
  profile: Profile;
}

const Card: React.FC<CardProps> = ({ profile }) => {
  return (
    <div className="card">
      <Avatar />
      <Info profile={profile} />
    </div>
  );
};

export default Card;
