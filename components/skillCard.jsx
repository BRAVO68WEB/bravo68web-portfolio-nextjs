import React from "react";
import SkillCardStyle from "./skillCard.styled";

function SkillCard({ title, children, image, bannerImage, url }) {
  return (
    <SkillCardStyle>
      <div className="card">
        {image && (
          <a href={url}>
            <div className="card-logo">
              <img src={image} height="30" />
            </div>
          </a>
        )}

        <div className="title">{title}</div>
        {children}
      </div>
    </SkillCardStyle>
  );
}

export default SkillCard;
