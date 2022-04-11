import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format, parse } from "date-format-parse";
import { useLastFM } from "use-last-fm";

function LastFMCurrentSkillCard({
  title,
  image,
  empty,
  artist,
  albumImg,
  name,
  url,
}) {
  const lastFM = useLastFM(3);

  if (lastFM.status !== "playing") {
    return (
      <SkillCard title={title} image={image} url={url}>
        Not listening to anything
      </SkillCard>
    );
  }
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
