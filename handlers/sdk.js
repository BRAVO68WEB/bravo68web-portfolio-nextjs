import { requester } from "./requester";

export const APISDK = {
	data: {},
	async req() {
		await requester(
			[
				{
					endpoint: "/me/github/user",
					name: "gh_user",
				},
				{
					endpoint: "/me/discord/profile",
					name: "discord_activity",
				},
				{
					endpoint: "/me/gaming/osu/user",
					name: "osu_user",
				},
				{
					endpoint: "/me/gaming/osu/best",
					name: "osu_bestScores",
				},
				{
					endpoint: "/me/spotify/top",
					name: "spotify_top_songs",
				},
				{
					endpoint: "/me/wakatime/codeTimeAllTime",
					name: "wakatime_alltime",
				},
				{
					endpoint: "/me/wakatime/codeStatsLast7Days",
					name: "wakatime_stats",
				},
				{
					endpoint: "/me/wakatime/LanguageUsageInLast7Days",
					name: "wakatime_lang",
				},
				{
					endpoint: "/me/hashnode",
					name: "hn_user",
				},
				// {
				// 	endpoint: "/me/twitter/profile",
				// 	name: "twitter_user",
				// },
				// {
				// 	endpoint: "/me/twitter/tweets",
				// 	name: "twitter_tweets",
				// },
				{
					endpoint: "/me/lastfm/current",
					name: "lastfm_current",
				},
				{
					endpoint: "/me/github/events",
					name: "gh_events",
				},
				{
					endpoint: "/me/vscode",
					name: "vscode",
				},
				{
					endpoint: "/me/mastodon/statuses",
					name: "masto_status",
				},
				{
					endpoint: "/me/hackthebox/profile",
					name: "htb_profile",
				},
				{
					endpoint: "/me/hackthebox/activity",
					name: "htb_activity",
				}
			],
			this.data
		);
	},
};
