import React from "react";
import SkillCard from "../skillCard";

function GithubTrophySkillCard ({ title, image, bannerImage, url }) {
  return (
    <SkillCard title={title} image={image} url={url}>
      <br />
      <div className="description">
        <img src={bannerImage} alt="" />
      </div>
    </SkillCard>
  );
}

export default GithubTrophySkillCard;