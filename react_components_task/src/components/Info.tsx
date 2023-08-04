import React from "react";

interface Profile {
  name: string;
  bio: string;
  website?: string;
}

interface InfoProps {
  profile: Profile;
}

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
