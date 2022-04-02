import React from "react";
import { ArtStyle } from "./art.style";
import { projects } from "config";
import SkillCard from "./artCard";
function Art() {
  return (
    <ArtStyle>
      {projects.map((project, index) => {
        return <SkillCard key={index} {...project} />;
      })}
    </ArtStyle>
  );
}

export default Art;
