import React, { useEffect, useState } from "react";
import Skill from "./skillCard";
import SkillsStyle from "./skills.style";
import axios from "handlers/axios";
import { APISDK } from "handlers/sdk";
import GitHubSkillCard from "./skillComponents/github_user";
import OsuUserSkillCard from "./skillComponents/osu_user";

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
    };
    setSkills(APISDK.data);
    setLoading(false);
  }

  useEffect(() => {
    requestAPIS();
  }, [loading, APISDK]);
  return (
    <>
      {!loading && (
        <SkillsStyle>
          <div className="skills">
            <GitHubSkillCard
              title={skills?.gh_user?.data?.login}
              description={skills?.gh_user?.data?.bio}
              image={skills?.logo?.github}
            />
            <OsuUserSkillCard
              title={skills?.osu_user?.data[0]?.username}
              image={skills?.logo?.osu}
              description1={skills?.osu_user?.data[0]?.accuracy}
              description2={skills?.osu_user?.data[0]?.country}
            />
            <Skill />
            <Skill />
            <Skill />
          </div>
        </SkillsStyle>
      )}
    </>
  );
}

export default Skills;
