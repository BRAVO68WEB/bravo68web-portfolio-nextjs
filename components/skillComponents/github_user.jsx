import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";

function GitHubSkillCard({ description, title, image }) {
  return (
    <SkillCard title={title} image={image}>
      <div className="description">{description}</div>
    </SkillCard>
  );
}

export default GitHubSkillCard;
