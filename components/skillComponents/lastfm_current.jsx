import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format, parse } from "date-format-parse";

function LastFMCurrentSkillCard({
  title,
  image,
  empty,
  artist,
  albumImg,
  name,
  url,
}) {
  console.log(empty);
  return (
    <SkillCard title={title} image={image} url={url}>
      <div className="description">
        {empty ? "No recent tracks" : `${artist} - ${name}`}
      </div>
      <div className="description">
        {empty ? "" : <img src={albumImg} alt={`${artist} - ${name}`} />}
      </div>
    </SkillCard>
  );
}

export default LastFMCurrentSkillCard;
