import React, { useEffect, useState } from "react";
import { ArtStyle, ArtTitleStyle } from "./toots.style";
import SkillCard from "./tootCard";
import { APISDK } from "handlers/sdk";
import SkillsStyle from "./skills.style";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Toots() {
	const [skills, setSkills] = useState({});
	const [loading, setLoading] = useState(true);

	async function requestAPIS() {
		await APISDK.req();
		APISDK.data.logo = {
			masto: `https://cdn.fosstodon.org/accounts/avatars/000/028/400/original/324cba4cb379bd4e.png`,
		};
		setSkills(APISDK.data.masto_status);
		setLoading(false);
	}

	useEffect(() => {
		requestAPIS();
	}, [loading]);
	let image = skills?.logo?.masto;
	if (loading) {
		return (
			<SkillsStyle>
				<Box sx={{ width: "60%" }}>
					<LinearProgress />
					Fetching Toots from Fosstodon...
				</Box>
				<br />
			</SkillsStyle>
		);
	} else {
		return (
			<>
				<ArtTitleStyle>
					<div className="title-bar">Fosstodon Status</div>
				</ArtTitleStyle>
				<div className="mainboard__container">
					{skills && (
						<ArtStyle>
							{skills?.data?.map((project, index) => {
								project.image = image;
								return (
									<>
										<SkillCard {...project} />
									</>
								);
							})}
						</ArtStyle>
					)}
				</div>
			</>
		);
	}
}

export default Toots;
