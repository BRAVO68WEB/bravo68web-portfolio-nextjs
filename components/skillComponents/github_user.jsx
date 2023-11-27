import React from "react";
import SkillCard from "../skillCard";
import { format } from "date-format-parse";

function GitHubSkillCard({
	title,
	image,
	public_gists,
	followers,
	following,
	public_repos,
	created_at,
	url,
}) {
	return (
		<SkillCard title={title} image={image} url={url}>
			<div className="description">
				Repos :-
				<div className="value">{public_repos}</div>
			</div>
			<div className="description">
				Followers :-
				<div className="value">{followers}</div>
			</div>
			<div className="description">
				Following :-
				<div className="value">{following}</div>
			</div>
			<div className="description">
				Gists :-
				<div className="value">{public_gists}</div>
			</div>
			<div className="description">
				Joined On :-
				<div className="value">{format(created_at, "DD MMM YYYY")}</div>
			</div>
		</SkillCard>
	);
}

export default GitHubSkillCard;
