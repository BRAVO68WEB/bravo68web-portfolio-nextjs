import React, { useEffect, useState } from "react";
import { DicordActivityStyle } from "./discord-activity.style";
import { useLanyard } from "react-use-lanyard";
import { discord_id } from "config";
import DiscordParser from "../libs/discord-parser";
import Image from "next/image";

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

	if (!loading && parsedStatus && status.discord_status !== "offline" && parsedStatus.activity) {
		return (
			<DicordActivityStyle>
				<div className="discord-icons">
					<div className="discord-large-icon">
						<Image
							height={100} width={
								100
							} 
							src={parsedStatus.activity.assets.large_image} alt="discord large image"
						/>
					</div>
					<div className="discord-small-icon">
						{
							// If status is custom status, then show the emoji
							parsedStatus.activity.prirority_id === 3 ? (
								parsedStatus.custom_status.emoji.name
							) : (
								<Image
									height={25} width={
										25
									}
									src={parsedStatus.activity.assets.small_image} alt="discord small image"
								/>
							)
						}
					</div>
				</div>
				<div className="discord-messageBox">
					<div className="discord-message-application">
						<b>
							{parsedStatus.discord.username}
						</b>
					</div>
					<div className="discord-message-activity">
						<b>{parsedStatus.activity.details ?? "-------"}</b>
					</div>
					<br />
					<div className="discord-message-files">
						<b>{parsedStatus.activity.state ?? parsedStatus.activity.name}</b>
					</div>
				</div>
			</DicordActivityStyle>
		);
	} else if (!loading && parsedStatus && status.discord_status !== "offline") {
		return (
			<DicordActivityStyle>
				<div className="discord-icons">
					<div className="discord-large-icon">
						<Image
							height={100} width={
								100
							}
							src={parsedStatus?.discord?.avatar_url} alt="discord large image"
						/>
					</div>
					<div className="discord-small-icon">
						<Image
							height={25} width={
								25
							}
							src={"/images/" + parsedStatus?.discord?.discord_status + ".png"} alt="discord small image"
						/>
					</div>
				</div>
				<div className="discord-messageBox">
					<div className="discord-message-application">
						<b>
							{parsedStatus?.discord?.username}
						</b>
					</div>
					<div className="discord-message-activity">
						<b>{parsedStatus?.discord?.discord_status}</b>
					</div>
					<br />
					<div className="discord-message-files">
						<b>is Available</b>
					</div>
				</div>
			</DicordActivityStyle>
		);
	}
	else {
		let restData = {
			username: "bravo68web",
			public_flags: 64,
			id: "457039372009865226",
			avatar: "b9e91dcc8e658eb1ebf24299b7bec733",
		};

		return (
			<DicordActivityStyle>
				<div className="discord-icons">
					<div className="discord-large-icon">
						<Image
							alt="discord-asset"
							height={100} width={
								100
							} src={"/images/default_game.webp"} />
					</div>
					<div className="discord-small-icon">
						<Image
							height={25} width={
								25
							} src={"/images/" + "offline" + ".png"} alt="discord asset" />
					</div>
				</div>
				<div className="discord-messageBox">
					<div className="discord-message-application">
						<b>
							{restData.username}
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
