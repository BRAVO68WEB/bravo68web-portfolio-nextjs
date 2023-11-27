import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format, parse } from "date-format-parse";

function HashNodeSkillCard({
	title,
	image,
	joinOn,
	numPosts,
	numFollowers,
	publicationDomain,
	numReactions,
	url,
}) {
	return (
		<SkillCard title={title} image={image} url={url}>
			<div className="description">
				Joined on: 
				<div className="value">
					{format(joinOn, "DD MMM YYYY")}
				</div>
			</div>
			<div className="description"> Total Posts : {numPosts}</div>
			<div className="description"> Total Followers : {numFollowers}</div>
			<div className="description"> Total Reactions : {numReactions}</div>
		</SkillCard>
	);
}

export default HashNodeSkillCard;
