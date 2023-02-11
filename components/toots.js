import React, { useEffect, useState } from "react";
import { ArtStyle } from "./toots.style";
import SkillCard from "./tootCard";
import { APISDK } from "handlers/sdk";
import SkillsStyle from "./skills.style";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function () {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  async function requestAPIS() {
    await APISDK.req();
    APISDK.data.logo = {
      masto: `https://cdn.fosstodon.org/accounts/avatars/000/028/400/original/324cba4cb379bd4e.png`,
    };
    setSkills(APISDK.data);
    setLoading(false);
  }

  useEffect(() => {
    requestAPIS();
  }, [loading, APISDK]);
  let image = skills?.logo?.masto;
  if (loading) {
    return (
      <SkillsStyle>
        <Box sx={{ width: "60%" }}>
          <LinearProgress />
          Fetching Toots from Fosstodon...
        </Box>
        <br />
      </SkillsStyle>
    );
  } else {
    return (
      <>
        <div className="mainboard__container">
          Fosstodon Status
          {skills && (
            <ArtStyle>
              {skills?.masto_status?.data?.map((project, index) => {
                project.image = image;
                return (
                  <>
                    <SkillCard {...project} />
                  </>
                );
              })}
            </ArtStyle>
          )}
        </div>
      </>
    );
  }
}
