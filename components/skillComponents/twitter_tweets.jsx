import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format } from "date-format-parse";

function TwitterTweetsSkillCard({
  title,
  image,
  tweets1,
  tweets2,
  tweets3,
  url,
}) {
  return (
    <SkillCard title={title} image={image} url={url}>
      <div className="skill-card-content">
        <div className="skill-card-content-inner">
          <a href={"https://twitter.com/Bravo68web/status/" + tweets1.id}>
            {tweets1.text}
          </a>
        </div>
      </div>
      <br />
      <div className="skill-card-content">
        <div className="skill-card-content-inner">
          <a href={"https://twitter.com/Bravo68web/status/" + tweets2.id}>
            {tweets2.text}
          </a>
        </div>
      </div>
      <br />
      <div className="skill-card-content">
        <div className="skill-card-content-inner">
          <a href={"https://twitter.com/Bravo68web/status/" + tweets3.id}>
            {tweets3.text}
          </a>
        </div>
      </div>
    </SkillCard>
  );
}

export default TwitterTweetsSkillCard;
