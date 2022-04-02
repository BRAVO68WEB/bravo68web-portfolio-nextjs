import React, { useEffect, useState } from "react";
import Skill from "./skillCard";
import SkillsStyle from "./skills.style";
import axios from "handlers/axios";
import { APISDK } from "handlers/sdk";

function Skills() {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(skills);

  async function requestAPIS() {
    await APISDK.req();
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
            <Skill
              title={skills?.gh_user?.data?.login}
              description={skills?.gh_user?.data?.bio}
              image={skills?.gh_user?.data?.avatar_url}
            />
            <Skill />
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
