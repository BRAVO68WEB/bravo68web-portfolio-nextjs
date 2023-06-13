import React from "react";
import { ArtStyle } from "./art.style";
import { projects, arts } from "config";
import SkillCard from "./artCard";
import ArtModel from "./artModal";

function Art() {
	return (
		<>
			<ArtStyle>
				{projects.map((project, index) => {
					return (
						<>
							<SkillCard key={project.name} {...project} />
						</>
					);
				})}
				{arts.map((project, index) => {
					return (
						<>
							<SkillCard key={project.name} {...project} />
						</>
					);
				})}
			</ArtStyle>
		</>
	);
}

export default Art;
