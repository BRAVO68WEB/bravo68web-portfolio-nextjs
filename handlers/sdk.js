import { tempEndpoint } from "./requester";
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
  req() {
    return tempEndpoint("https://api.github.com/users/bravo68web", this.data);
  },
};
