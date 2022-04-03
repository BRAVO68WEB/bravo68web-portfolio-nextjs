import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format } from "date-format-parse";

function TwitterUserSkillCard({
  title,
  image,
  followers_count,
  friends_count,
  statuses_count,
  favourites_count,
  created_at,
}) {
  return (
    <SkillCard title={title} image={image}>
      <div className="description">Followers :- {followers_count}</div>
      <div className="description">Following :- {friends_count}</div>
      <div className="description">
        Total Liked Tweets :- {favourites_count}
      </div>
      <div className="description">Total Tweets :- {statuses_count}</div>
      <div className="description">
        Joined On :- {format(created_at, "DD MMM YYYY")}
      </div>
    </SkillCard>
  );
}

export default TwitterUserSkillCard;
