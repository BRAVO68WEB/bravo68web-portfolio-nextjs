import React from "react";
import SkillCardStyle from "./skillCard.styled";

function SkillCard({ title, children, image, bannerImage }) {
  console.log(image);
  return (
    <SkillCardStyle>
      <div className="card">
        {image && (
          <div className="card-logo">
            <img src={image} height="30" />
          </div>
        )}

        <div className="title">{title}</div>
        {children}
      </div>
    </SkillCardStyle>
  );
}

export default SkillCard;
