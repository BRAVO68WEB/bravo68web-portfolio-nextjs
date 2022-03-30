import React, { useEffect, useState } from "react";
import Skill from "./skillCard";
import SkillsStyle from "./skills.style";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState({});
  useEffect(() => {
    axios.get("").then((res) => {
      setSkills(res.data);
    });
  }, []);
  return (
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
  );
}

export default Skills;
