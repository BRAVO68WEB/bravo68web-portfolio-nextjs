import React, { useEffect, useState } from "react";
import { DicordActivityStyle } from "./discord-activity.style";
import { useLanyard } from "react-use-lanyard";
import { discord_id } from "config";
import DiscordParser from "../libs/discord-parser";

const customStatus = [
	"Searching for Cat Girls",
	"Watching Anime",
	"Sleeping",
	"Studying",
];

export default function DiscordActivity() {
	const statusPicker = () => {
		return customStatus[Math.floor(Math.random() * customStatus.length)];
	};
	const { loading, status } = useLanyard({
		userId: discord_id,
		socket: true,
	});
	const [pickedStatus] = useState(statusPicker());

	const [parsedStatus, setParsedStatus] = useState(null);

	useEffect(() => {
		if (!loading) {
			setParsedStatus(DiscordParser(status));
		}
	}, [status, loading]);

	if (!loading && parsedStatus && status.discord_status !== "offline") {
		return (
			<DicordActivityStyle>
				<div className="discord-icons">
					<div className="discord-large-icon">
						<img 
							src={parsedStatus.activity.assets.large_image} alt="discord large image"
						/>
					</div>
					<div className="discord-small-icon">
						<img
							src={parsedStatus.activity.assets.small_image} alt="discord small image"
						/>
					</div>
				</div>
				<div className="discord-messageBox">
					<div className="discord-message-application">
						<b>
							{parsedStatus.discord.username +
								"#" +
								parsedStatus.discord.discriminator}
						</b>
					</div>
					<div className="discord-message-activity">
						<b>{parsedStatus.activity.details}</b>
					</div>
					<br />
					<div className="discord-message-files">
						<b>{parsedStatus.activity.state}</b>
					</div>
				</div>
			</DicordActivityStyle>
		);
	} else {
		let restData = {
			username: "Bravo68-DF_Techs",
			public_flags: 64,
			id: "457039372009865226",
			discriminator: "6429",
			avatar: "08a8937664b3b165805965244d6f095f",
		};

		return (
			<DicordActivityStyle>
				<div className="discord-icons">
					<div className="discord-large-icon">
						<img src={"/images/default_game.jpg"} />
					</div>
					<div className="discord-small-icon">
						<img src={"/images/" + "offline" + ".png"} alt="" />
					</div>
				</div>
				<div className="discord-messageBox">
					<div className="discord-message-application">
						<b>
							{restData.username + "#" + restData.discriminator}
						</b>
					</div>
					<div className="discord-message-activity">
						<b>is Offline</b>
					</div>
					<br />
					<div className="discord-message-files">
						<b>{pickedStatus}</b>
					</div>
				</div>
			</DicordActivityStyle>
		);
	}
}
