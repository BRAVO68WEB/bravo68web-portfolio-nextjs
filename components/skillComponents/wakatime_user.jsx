import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format, parse } from "date-format-parse";

function WakatimeUserSkillCard({
  title,
  image,
  total_time,
  average_weekly_time,
  total_weekly_time,
  joinedOn,
  url,
}) {
  return (
    <SkillCard title={title} image={image} url={url}>
      <div className="description">Total Code time :- {total_time}</div>
      <div className="description">
        Average Weekly Code time :- {average_weekly_time}
      </div>
      <div className="description">
        Total Weekly Code time :- {total_weekly_time}
      </div>
      <div className="description">
        Joined on :- {format(joinedOn, "DD MMM YYYY")}
      </div>
    </SkillCard>
  );
}

export default WakatimeUserSkillCard;
