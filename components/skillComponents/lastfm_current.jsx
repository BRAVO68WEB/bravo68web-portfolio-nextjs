import React from "react";
import SkillCard from "../skillCard";
import useLastFM from "hooks/useLastFM";

function LastFMCurrentSkillCard({
  title,
  image,
  empty,
  artist,
  albumImg,
  name,
  url,
}) {
  const {status,song} = useLastFM();

  if (status !== "playing") {
    return (
      <SkillCard title={title} image={image} url={url}>
        Not listening to anything
      </SkillCard>
    );
  }
  return (
    <SkillCard title={title} image={image} url={url}>
      <div className="description">
        {empty ? "No recent tracks" : `${song.artist} - ${song.name}`}
      </div>
      <div className="description">
        {empty ? "" : <img src={song.art} alt={`${song.artist} - ${song.name}`} className="albumart"/>}
      </div>
    </SkillCard>
  );
}

export default LastFMCurrentSkillCard;