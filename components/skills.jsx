import React, { useEffect, useState } from "react";
import Skill from "./skillCard";
import SkillsStyle from "./skills.style";
// import axios from "handlers/axios";
import { APISDK } from "handlers/sdk";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
// import "mainboard.css";

// Skill Card templates
import GitHubSkillCard from "./skillComponents/github_user";
import OsuUserSkillCard from "./skillComponents/osu_user";
import TwitterUserSkillCard from "./skillComponents/twitter_user";
import GitHubThySkillCard from "./skillComponents/github_trophy";
import SpotifyTopSkillCard from "./skillComponents/spotify_top_songs";

function Skills() {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(skills);

  async function requestAPIS() {
    await APISDK.req();
    APISDK.data.logo = {
      osu: `https://www.pngkit.com/png/full/345-3451155_osu-logo.png`,
      github: `https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png`,
      spotify: `https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png`,
      hashnode: `https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress`,
      discord: `https://www.freepnglogos.com/uploads/discord-logo-png/anthrocon-twitter-quot-discord-user-wanna-21.png`,
      wakatime: `https://brandeps.com/logo-download/W/WakaTime-logo-vector-01.svg`,
      twitter:
        "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png",
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
        </Box>
      </SkillsStyle>
    );
  } else {
    return (
      <div>
        {!loading && (
          <SkillsStyle>
            <div className="mainboard__container">
              <GitHubSkillCard
                title={"GitHub Stats"}
                image={skills?.logo?.github}
                public_repos={skills?.gh_user?.data?.public_repos}
                followers={skills?.gh_user?.data?.followers}
                following={skills?.gh_user?.data?.following}
                public_gists={skills?.gh_user?.data?.public_gists}
                created_at={skills?.gh_user?.data?.created_at}
              />
              <OsuUserSkillCard
                title={"Osu! Player Stats"}
                image={skills?.logo?.osu}
                accuracy={skills?.osu_user?.data[0]?.accuracy}
                level={skills?.osu_user?.data[0]?.level}
                pp_raw={skills?.osu_user?.data[0]?.pp_raw}
                country={skills?.osu_user?.data[0]?.country}
                pp_rank={skills?.osu_user?.data[0]?.pp_rank}
                countryRank={skills?.osu_user?.data[0]?.pp_country_rank}
                join_date={skills?.osu_user?.data[0]?.join_date}
              />
              <TwitterUserSkillCard
                title={"Twitter Stats"}
                image={skills?.logo?.twitter}
                followers_count={skills?.twitter_user?.data?.followers_count}
                friends_count={skills?.twitter_user?.data?.friends_count}
                statuses_count={skills?.twitter_user?.data?.statuses_count}
                favourites_count={skills?.twitter_user?.data?.favourites_count}
                created_at={skills?.twitter_user?.data?.created_at}
              />

              {/* <GitHubThySkillCard
                title={"GitHub Thropies"}
                image={skills?.logo?.github}
                bannerImage="https://github-profile-trophy.vercel.app/?username=bravo68web&theme=discord&column=3&row=2"
              /> */}
              <SpotifyTopSkillCard
                title={"Spotify Top Songs"}
                image={skills?.logo?.spotify}
                topSongs1={skills?.spotify_top_songs?.data?.items[0]}
                topSongs2={skills?.spotify_top_songs?.data?.items[1]}
                topSongs3={skills?.spotify_top_songs?.data?.items[2]}
                topSongs4={skills?.spotify_top_songs?.data?.items[3]}
                topSongs5={skills?.spotify_top_songs?.data?.items[4]}
              />
            </div>
          </SkillsStyle>
        )}
      </div>
    );
  }
}

export default Skills;
