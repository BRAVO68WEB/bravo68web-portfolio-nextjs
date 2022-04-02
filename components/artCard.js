import React from "react";
import ArtCardStyle from "./artCard.style";

function SkillCard({ title, description, image }) {
  return (
    <ArtCardStyle>
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
    </ArtCardStyle>
  );
}

export default SkillCard;
