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
          endpoint: "/me/osu/recent",
          name: "osu_recent",
        },
        {
          endpoint: "/me/osu/user",
          name: "osu_user",
        },
        {
          endpoint: "/me/osu/bestScores",
          name: "osu_bestScores",
        },
        {
          endpoint: "/me/spotify/myTopSongs",
          name: "spotify_top_songs",
        },
        {
          endpoint: "/me/wakatime/me",
          name: "wakatime_user",
        },
        {
          endpoint: "/me/wakatime/stats",
          name: "wakatime_stats",
        },
        // {
        //   endpoint: "/me/hashnode/me",
        //   name: "hn_user",
        // },
        {
          endpoint: "/me/twitter/me",
          name: "twitter_user",
        },
        {
          endpoint: "/me/twitter/recentTweets",
          name: "twitter_tweets",
        },
      ],
      this.data
    );
    // return tempEndpoint("https://api.github.com/users/bravo68web", this.data);
  },
};
