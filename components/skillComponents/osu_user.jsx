import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";

function OsuUserSkillCard({ description1, title, image, description2 }) {
  return (
    <SkillCard title={title} image={image}>
      <div className="description">Accuracy :- {description1}</div>
      <div className="description">Country :- {description2}</div>
    </SkillCard>
  );
}

export default OsuUserSkillCard;
