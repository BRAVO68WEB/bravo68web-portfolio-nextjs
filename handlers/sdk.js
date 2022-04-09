import { tempEndpoint, requester } from "./requester";
// gh_user,
// discord_activity,
// osu_recent,
// osu_user,
// osu_bestScores,
// spotify_top_songs,
// wakatime_user,
// wakatime_stats,
// hn_user,
// twitter_user,
// twitter_tweets,

export const APISDK = {
  data: {},
  async req() {
    await requester(
      [
        {
          endpoint: "/me/github/userdata",
          name: "gh_user",
        },
        {
          endpoint: "/me/discord/activity",
          name: "discord_activity",
        },
        {
          endpoint: "/me/osu/v2/user",
          name: "osu_user",
        },
        {
          endpoint: "/me/osu/v2/bestScores",
          name: "osu_bestScores",
        },
        {
          endpoint: "/me/spotify/myTopSongs",
          name: "spotify_top_songs",
        },
        {
          endpoint: "/me/wakatime/codeTimeAllTime",
          name: "wakatime_user",
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
          endpoint: "/me/hashnode/me/all",
          name: "hn_user",
        },
        {
          endpoint: "/me/twitter/me",
          name: "twitter_user",
        },
        {
          endpoint: "/me/twitter/recentTweets",
          name: "twitter_tweets",
        },
        {
          endpoint: "/me/lastfm/current",
          name: "lastfm_current",
        },
        {
          endpoint: "/me/github/userevent",
          name: "gh_events",
        },
      ],
      this.data
    );
    // return tempEndpoint("https://api.github.com/users/bravo68web", this.data);
  },
};
