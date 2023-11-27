import React from "react";
import SkillCard from "../skillCard";
import { format, parse } from "date-format-parse";

function OsuUserSkillCard({
	title,
	image,
	accuracy,
	level,
	pp_raw,
	country,
	pp_rank,
	join_date,
	maximum_combo,
	total_score,
	url,
}) {
	return (
		<SkillCard title={title} image={image} url={url}>
			<div className="description">
				Accuracy :-
				<div className="value">{Math.floor(accuracy)} %</div>
			</div>
			<div className="description">
				Level :-
				<div className="value">{Math.floor(level)}</div>
			</div>
			<div className="description">
				PP :-
				<div className="value">{Math.floor(pp_raw)}</div>
			</div>
			<div className="description">
				Country :-
				<div className="value">{country}</div>
			</div>
			<div className="description">
				Global Rank :-
				<div className="value">#{pp_rank}</div>
			</div>
			<div className="description">
				Max Combo :-
				<div className="value">{maximum_combo}</div>
			</div>

			<div className="description">
				Total Score :-
				<div className="value">{total_score?.toLocaleString()}</div>
			</div>

			<div className="description">
				Joined on :
				<div className="value">{format(join_date, "DD MMM YYYY")}</div>
			</div>
		</SkillCard>
	);
}

export default OsuUserSkillCard;
