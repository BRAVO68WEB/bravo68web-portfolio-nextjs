import React, { useEffect, useState } from "react";
import SkillsStyle from "./skills.style";
import { APISDK } from "handlers/sdk";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

// Skill Card templates
import GitHubSkillCard from "./skillComponents/github_user";
import OsuUserSkillCard from "./skillComponents/osu_user";
import SpotifyTopSkillCard from "./skillComponents/spotify_top_songs";
import WakatimeUserSkillCard from "./skillComponents/wakatime_user";
import HashNodeSkillCard from "./skillComponents/hashnode_inst";
import OsuBestScoresSkillCard from "./skillComponents/osu_bestScores";
import WakatimeTopLangSkillCard from "./skillComponents/wakatime_lang";
import LastFMCurrentSkillCard from "./skillComponents/lastfm_current";
import GitHubUserEvtSkillCard from "./skillComponents/github_events";
import HTBUserCard from "./skillComponents/htb_user";
import HTBActivityCard from "./skillComponents/htb_activity";

function Skills() {
	const [skills, setSkills] = useState({});
	const [loading, setLoading] = useState(true);

	async function requestAPIS() {
		await APISDK.req();
		APISDK.data.logo = {
			osu: `https://www.pngkit.com/png/full/345-3451155_osu-logo.png`,
			github: `https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png`,
			spotify: `https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png`,
			hashnode: `https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress`,
			discord: `https://www.freepnglogos.com/uploads/discord-logo-png/anthrocon-twitter-quot-discord-user-wanna-21.png`,
			wakatime: `/images/brandlogos/WakaTime-logo-vector-01.svg`,
			lastfm: "/images/brandlogos/Lastfm-icon-vector-03.svg",
			twitter:
				"https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png",
			htb: "https://app.hackthebox.com/images/HTB-favicon/apple-touch-icon.png",
		};
		setSkills(APISDK.data);
		setLoading(false);
	}

	useEffect(() => {
		requestAPIS();
	}, [loading, APISDK]);

	if (loading) {
		return (
			<SkillsStyle>
				<Box sx={{ width: "60%" }}>
					<LinearProgress />
					Requesting Live API data...
				</Box>
				<br />
			</SkillsStyle>
		);
	} else {
		let lastFMempty = true;
		if (skills?.lastfm_current?.recenttracks?.track?.length > 0) {
			lastFMempty = false;
		}

		return (
			<div>
				{/* <Cursor /> */}
				{!loading && (
					<SkillsStyle>
						<div className="mainboard__container">
							<GitHubSkillCard
								title={"GitHub User Stats"}
								url={"https://github.com/Bravo68web"}
								image={skills?.logo?.github}
								public_repos={
									skills?.gh_user?.data?.public_repos
								}
								followers={skills?.gh_user?.data?.followers}
								following={skills?.gh_user?.data?.following}
								public_gists={
									skills?.gh_user?.data?.public_gists
								}
								created_at={skills?.gh_user?.data?.created_at}
							/>
							<HTBActivityCard 
								title={"HTB Activity"}
								url={"https://app.hackthebox.com/profile/1367733"}
								image={skills?.logo?.htb}
								data={skills?.htb_activity?.data}
							/>
							<OsuUserSkillCard
								title={"Osu! Player Stats"}
								url={"https://osu.ppy.sh/users/bravo68web"}
								image={skills?.logo?.osu}
								accuracy={
									skills?.osu_user?.data?.statistics
										?.hit_accuracy
								}
								level={
									skills?.osu_user?.data?.statistics?.level
										?.current
								}
								pp_raw={skills?.osu_user?.data?.statistics?.pp}
								country={skills?.osu_user?.data?.country?.code}
								pp_rank={
									skills?.osu_user?.data?.statistics
										?.global_rank
								}
								countryRank={
									skills?.osu_user?.data?.statistics
										?.country_rank
								}
								maximum_combo={
									skills?.osu_user?.data?.statistics
										?.maximum_combo
								}
								join_date={"2019-09-21 19:33:44"}
								total_score={
									skills?.osu_user?.data?.statistics
										?.total_score
								}
							/>
							<HTBUserCard
								title={"HTB User Stats"}
								url={"https://app.hackthebox.com/profile/1367733"}
								image={skills?.logo?.htb}
								rank={skills?.htb_profile?.data?.rank}
								points={skills?.htb_profile?.data?.points}
								rank_ownership={skills?.htb_profile?.data?.rank_ownership}
								ranking={skills?.htb_profile?.data?.ranking}
								respects={skills?.htb_profile?.data?.respects}
								system_owns={skills?.htb_profile?.data?.system_owns}
								team={skills?.htb_profile?.data?.team}
								user_owns={skills?.htb_profile?.data?.user_owns}
								joinedOn={"2023-10-12T08:49:15.000000Z"}
							/>
							<SpotifyTopSkillCard
								title={"Spotify Top Songs"}
								url={
									"https://open.spotify.com/user/31huoajpuynl4w4dzbhp4frktqw4?si=48195baf55a54d7d"
								}
								image={skills?.logo?.spotify}
								topSongs1={
									skills?.spotify_top_songs?.data?.items[0]
								}
								topSongs2={
									skills?.spotify_top_songs?.data?.items[1]
								}
								topSongs3={
									skills?.spotify_top_songs?.data?.items[2]
								}
								topSongs4={
									skills?.spotify_top_songs?.data?.items[3]
								}
								topSongs5={
									skills?.spotify_top_songs?.data?.items[4]
								}
							/>
							<WakatimeUserSkillCard
								title={"Wakatime Stats"}
								url={"https://wakatime.com/@bravo68web"}
								image={skills?.logo?.wakatime}
								total_time={
									skills?.wakatime_alltime?.data?.text
								}
								average_weekly_time={
									skills?.wakatime_stats?.data
										?.human_readable_daily_average_including_other_language
								}
								total_weekly_time={
									skills?.wakatime_stats?.data
										?.human_readable_total_including_other_language
								}
								joinedOn={"2020-09-14"}
							/>
							<HashNodeSkillCard
								title={"HashNode Stats"}
								url={"https://blog.bravo68web.me/"}
								image={skills?.logo?.hashnode}
								joinOn={"2021-06-18"}
								numPosts={skills?.hn_user?.data?.numPosts}
								numFollowers={
									skills?.hn_user?.data?.numFollowers
								}
								numReactions={
									skills?.hn_user?.data?.numReactions
								}
							/>
							<OsuBestScoresSkillCard
								title={"Osu! Best Scores"}
								image={skills?.logo?.osu}
								url={"https://osu.ppy.sh/users/bravo68web"}
								bestScore1={skills?.osu_bestScores?.data?.[0]}
								bestScore2={skills?.osu_bestScores?.data?.[1]}
								bestScore3={skills?.osu_bestScores?.data?.[2]}
							/>
							{/* <TwitterTweetsSkillCard
								title={"Twitter Tweets"}
								url={"https://twitter.com/Bravo68web"}
								image={skills?.logo?.twitter}
								tweets1={skills?.twitter_tweets?.[0]}
								tweets2={skills?.twitter_tweets?.[1]}
								tweets3={skills?.twitter_tweets?.[2]}
							/> */}
							<WakatimeTopLangSkillCard
								title={"Wakatime Top Languages"}
								url={"https://wakatime.com/@bravo68web"}
								image={skills?.logo?.wakatime}
								topLang1={skills?.wakatime_lang?.data?.[0]}
								topLang2={skills?.wakatime_lang?.data?.[1]}
								topLang3={skills?.wakatime_lang?.data?.[2]}
								topLang4={skills?.wakatime_lang?.data?.[3]}
								topLang5={skills?.wakatime_lang?.data?.[4]}
							/>
							<LastFMCurrentSkillCard
								title={"LastFM Current Tracks"}
								url={"https://last.fm/user/bravo68web"}
								image={skills?.logo?.lastfm}
								empty={lastFMempty}
								artist={
									skills?.lastfm_current?.recenttracks
										?.track?.[0]?.artist["#text"]
								}
								name={
									skills?.lastfm_current?.recenttracks
										?.track?.[0]?.name
								}
								album={
									skills?.lastfm_current?.recenttracks
										?.track?.[0]?.album["#text"]
								}
								albumImg={
									skills?.lastfm_current?.recenttracks
										?.track?.[0].image[1]["#text"]
								}
							/>
							<GitHubUserEvtSkillCard
								title={"GitHub User Events"}
								url={"https://github.com/bravo68web"}
								image={skills?.logo?.github}
								evt1={skills?.gh_events?.data?.[0]}
								evt2={skills?.gh_events?.data?.[1]}
								evt3={skills?.gh_events?.data?.[2]}
								evt4={skills?.gh_events?.data?.[3]}
								evt5={skills?.gh_events?.data?.[4]}
							/>
						</div>
					</SkillsStyle>
				)}
			</div>
		);
	}
}

export default Skills;
