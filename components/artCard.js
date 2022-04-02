import React from "react";
import ArtCardStyle from "./artCard.style";

function SkillCard({ name, description, image }) {
  return (
    <ArtCardStyle>
      <div className="card">
        {image && (
          <div className="card-logo">
            <img src={image} height="140px" />
          </div>
        )}
        <div className="date">
          <b>{name}</b>
        </div>
        <div className="content">{description}</div>
      </div>
    </ArtCardStyle>
  );
}

export default SkillCard;
