import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
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
			<div className="description">Repos :- {public_repos}</div>
			<div className="description">Followers :- {followers}</div>
			<div className="description">Following :- {following}</div>
			<div className="description">Gists :- {public_gists}</div>
			<div className="description">
				Joined On :- {format(created_at, "DD MMM YYYY")}
			</div>
		</SkillCard>
	);
}

export default GitHubSkillCard;
