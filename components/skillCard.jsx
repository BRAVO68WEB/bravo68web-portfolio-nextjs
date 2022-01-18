import React from "react";
import SkillCardStyle from "./skillCard.styled";

function SkillCard() {
	return (
		<SkillCardStyle>
			<div className="card">
				<div className="date">26th September</div>
				<div className="content">
					@zhr_jafri We used to say that as joke, TIL, they real own rights to that
					zehreeli kheer.
				</div>
				<footer className="footer"></footer>
			</div>
		</SkillCardStyle>
	);
}

export default SkillCard;
