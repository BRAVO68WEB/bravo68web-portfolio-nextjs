export default function parse(data) {
	const output = {
		doing_nothing: false,
	};
	const act = [];

	const PrirorityActivityType = [
		"Coding",
		"Listening to Spotify",
		"Playing",
		"Custom Status",
		"Streaming",
		"Watching",
		"Competing",
		"Unknown",
	];

	output.discord = {
		id: data.discord_user.id,
		username: data.discord_user.username,
		discriminator: data.discord_user.discriminator,
		avatar_url:
			"https://cdn.discordapp.com/avatars/" +
			data.discord_user.id +
			"/" +
			data.discord_user.avatar +
			".png",
		avatar_decoration_url:
			"https://cdn.discordapp.com/avatar-decoration-presets/" +
			data.discord_user.avatar_decoration +
			".png",
		discord_status: data.discord_status,
	};

	output.kv = data.kv;

	if (data.discord_status == "offline") {
		return {
			discord_status: "offline",
		};
	}

	if (data.listening_to_spotify) {
		output.spotify = {
			album: data.spotify.album,
			artist: data.spotify.artist,
			song: data.spotify.song,
			album_art_url: data.spotify.album_art_url,
			timestamps: data.spotify.timestamps,
			track_id: data.spotify.track_id,
		};
	}
	for (const activity of data.activities) {
		if (activity.name.includes("Visual Studio Code")) {
			act.push({
				prirority_id: PrirorityActivityType.indexOf("Coding"),
				...activity,
			});
		} else if (activity.name.includes("Spotify")) {
			act.push({
				prirority_id: PrirorityActivityType.indexOf(
					"Listening to Spotify"
				),
				...activity,
			});
		} else if (activity.type === 0) {
			act.push({
				prirority_id: PrirorityActivityType.indexOf("Playing"),
				...activity,
			});
		} else if (activity.name.includes("Custom Status")) {
			act.push({
				prirority_id: PrirorityActivityType.indexOf("Custom Status"),
				...activity,
			});
			output.custom_status = {
				state: activity.state,
				emoji: {
					name: activity.emoji?.name,
					id: activity.emoji?.id,
					animated: activity.emoji?.animated,
					emoji_url:
						"https://cdn.discordapp.com/emojis/" +
						activity.emoji?.id +
						".webp?size=44&quality=lossless",
				},
			};
		} else {
			act.push({
				prirority_id: PrirorityActivityType.indexOf("Unknown"),
				...activity,
			});
			break;
		}
	}

	act.sort((a, b) => a.prirority_id - b.prirority_id);

	if(act.length == 0) {
		return {
			...output,
			doing_nothing: true,
		}
	}

	output.activity = act[0];

	if (output.activity?.prirority_id == 1) {
		output.activity.assets = {
			large_image: output.spotify.album_art_url,
			small_image: "/images/brandlogos/SpotifyLogo.png",
		};
	} else if (output.activity?.prirority_id == 3) {
		output.activity.assets = {
			large_image: "/images/anime-profile-pic.png",
			small_image: output.custom_status.emoji.emoji_url,
		};
	} else {
		output.activity.assets = {
			large_image:
				"https://cdn.discordapp.com/app-assets/" +
				output.activity?.application_id +
				"/" +
				output.activity?.assets.large_image +
				".png",
			small_image:
				"https://cdn.discordapp.com/app-assets/" +
				output.activity?.application_id +
				"/" +
				output.activity?.assets?.small_image +
				".png",
		};
	}

	return output;
}
