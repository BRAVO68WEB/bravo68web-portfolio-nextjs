import React from "react";
import SkillCardStyle from "./skillCard.styled";

function SkillCard({ title, description, image }) {
  return (
    <SkillCardStyle>
      <div className="card">
        {image && (
          <div className="card-logo">
            <img src={image} height="30" />
          </div>
        )}
        <div className="date">{title}</div>
        <div className="content">{description}</div>
        <footer className="footer"></footer>
      </div>
    </SkillCardStyle>
  );
}

export default SkillCard;
