import React from "react";
import SkillCard from "../skillCard";

export default function ({ title, image, bannerImage, url }) {
  return (
    <SkillCard title={title} image={image} url={url}>
      <br />
      <div className="description">
        <img src={bannerImage} alt="" />
      </div>
    </SkillCard>
  );
}
