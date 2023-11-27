import React from "react";
import SkillCard from "../skillCard";
import { format, parse } from "date-format-parse";

function HTBUserCard({
	title,
	image,
	url,
	system_owns,
	user_owns,
	rank,
	points,
	rank_ownership,
	ranking,
	respects,
	team,
	joinedOn,
}) {
	return (
		<SkillCard title={title} image={image} url={url}>
			<div className="description">
				Points :- 
				<div className="value">
					{points}
				</div>
			</div>
			<div className="description">
				Rank :- 
				<div className="value">
					{rank}
				</div>
			</div>
			<div className="description">
				System Owns :- 
				<div className="value">
					{system_owns}
				</div>
			</div>
			<div className="description">
				User Owns :- 
				<div className="value">
					{user_owns}
				</div>
			</div>
			<div className="description">
				Global Ranking :- 
				<div className="value">
					{ranking}
				</div>
			</div>
			<div className="description">
				Respect :- 
				<div className="value">
					{respects}
				</div>
			</div>
			<div className="description">
				Ownership :- 
				<div className="value">
					{rank_ownership}%
				</div>
			</div>
			<div className="description">
				Team :- 
				<div className="value">
					{team?.name} | #{team?.ranking}
				</div>
			</div>
			<div className="description">
				Joined On :- 
				<div className="value">
					{format(joinedOn, "DD MMM YYYY")}
				</div>
			</div>
		</SkillCard>
	);
}

export default HTBUserCard;
