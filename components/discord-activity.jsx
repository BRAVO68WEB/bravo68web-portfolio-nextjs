import React, { useEffect, useState } from "react";
import { DicordActivityStyle } from "./discord-activity.style";
import { useLanyard } from "react-use-lanyard";
import { discord_id } from "config";
import DiscordParser from "../libs/discord-parser";

/* <pre>{!loading && JSON.stringify(status, null, 4)}</pre>; */

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
	const [time, setTime] = useState("00:00:00 elapsed");
	const [pickedStatus] = useState(statusPicker());
	const padTo2Digits = (num) => {
		return num.toString().padStart(2, "0");
	};

	const convertMsToHM = (milliseconds) => {
		let seconds = Math.floor(milliseconds / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		seconds = seconds % 60;
		minutes = seconds >= 30 ? minutes + 1 : minutes;
		minutes = minutes % 60;
		hours = hours % 24;
		return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
			seconds
		)} elapsed`;
	};

	const [currentTs, setCurrentTs] = useState(Date.now());
	const [parsedStatus, setParsedStatus] = useState(null);

	useEffect(() => {
		if (!loading) {
			setParsedStatus(DiscordParser(status));
		}
	}, [status, loading]);

	useEffect(() => {
		let interval = setInterval(() => {
			if (!loading) {
				setCurrentTs(Date.now());
				let timeElapsed = convertMsToHM(
					currentTs -
						new Date(parsedStatus?.activity?.timestamps.start)
				);
				setTime(timeElapsed);
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [currentTs, loading, convertMsToHM, parsedStatus]);

	if (!loading && parsedStatus && status.discord_status !== "offline") {
		return (
			<DicordActivityStyle>
				<div className="discord-icons">
					<div className="discord-large-icon">
						<img src={parsedStatus.activity.assets.large_image} />
					</div>
					<div className="discord-small-icon">
						<img
							src={parsedStatus.activity.assets.small_image}
							alt=""
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
					<div className="time-elapsed">{time}</div>
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
					{/* <div className="time-elapsed">00:00:00 elapsed</div> */}
				</div>
			</DicordActivityStyle>
		);
	}
}
