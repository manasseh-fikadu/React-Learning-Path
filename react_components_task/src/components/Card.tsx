import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

// Profile interface
interface Profile {
  name: string;
  bio: string;
  website?: string;
}

// Card Props interface
interface CardProps {
  profile: Profile;
}

// Card component
const Card: React.FC<CardProps> = ({ profile }) => {
  return (
    <div className="card">
      <Avatar />
      <Info profile={profile} />
    </div>
  );
};

export default Card;
