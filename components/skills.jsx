import React, { useEffect, useState } from "react";
import Skill from "./skillCard";
import SkillsStyle from "./skills.style";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState({});
  useEffect(() => {
    axios.get("https://api.github.com/users/bravo68web").then((res) => {
      console.log(res.data);
      setSkills(res.data);
    });
    // setSkills([{}]);
    //api fetch here
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
