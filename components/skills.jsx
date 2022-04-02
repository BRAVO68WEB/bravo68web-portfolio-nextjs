import React, { useEffect, useState } from "react";
import Skill from "./skillCard";
import SkillsStyle from "./skills.style";
import axios from "handlers/axios";
import { APISDK } from "handlers/sdk";

function Skills() {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios
    //   .get("/portfolio/api")
    //   .then((res) => {
    //     setSkills(res.data);
    //     console.log(res.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const interval = setTimeout(async () => {
      console.log("requesting");
      console.log(await APISDK.req());
      console.log(APISDK.data);
      if (valid) {
        setSkills(skill);
        setLoading(false);
        console.log(skill);
      } else {
        console.error(skill);
        setLoading(true);
      }
    }, 5000);
  }, [loading, APISDK]);
  return (
    <>
      {!loading && (
        <SkillsStyle>
          <div className="skills">
            <Skill
              title={skills.login}
              description={skills.bio}
              image={skills.avatar_url}
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
