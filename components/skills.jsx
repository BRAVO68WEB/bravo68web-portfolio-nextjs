import React, { useEffect, useState } from "react";
import Skill from "./skillCard";
import SkillsStyle from "./skills.style";

function Skills() {
	const [skills, setSkills] = useState([]);
	useEffect(() => {
		setSkills([{}]);
		//api fetch here
	}, []);
	return (
		<SkillsStyle>
			<div className="skills">
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</SkillsStyle>
	);
}

export default Skills;
