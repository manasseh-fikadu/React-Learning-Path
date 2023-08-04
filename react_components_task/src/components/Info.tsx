import React from "react";

// Profile interface
interface Profile {
  name: string;
  bio: string;
  website?: string;
}

// Info Props interface
interface InfoProps {
  profile: Profile;
}

// Info component
const Info: React.FC<InfoProps> = ({ profile }) => {
  return (
    <div className="info">
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      {profile.website && <a href={profile.website}>{profile.website}</a>}
    </div>
  );
};

export default Info;
