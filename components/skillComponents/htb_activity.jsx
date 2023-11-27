import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format, parse } from "date-format-parse";

function HTBActivityCard({
	title,
	image,
	url,
	data
}) {
	return (
		<SkillCard title={title} image={image} url={url}>
			{data.slice(0, 6).map((item) => {
				return (
					<>
						<div className="description">
							{item?.name} | {item?.object_type} 
							<div className="value">
								{item?.date_diff}
							</div>
						</div>
					</>
				);
			})}
		</SkillCard>
	);
}

export default HTBActivityCard;
