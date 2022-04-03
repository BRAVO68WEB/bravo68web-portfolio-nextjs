import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";

function GitHubThySkillCard({ title, image, bannerImage }) {
  return (
    <SkillCard title={title} image={image}>
      <br />
      <div className="description">
        <img src={bannerImage} alt="" />
      </div>
    </SkillCard>
  );
}

export default GitHubThySkillCard;
