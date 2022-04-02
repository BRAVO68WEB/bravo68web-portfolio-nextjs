import React from "react";
import MainStyle from "./main.style";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  name,
  github_url,
  linkedin_url,
  facebook_url,
  twitter_url,
  // email,
  // resume_url,
  instagram_url,
} from "config";
import DiscordActivity from "./discord-activity";

function Main() {
  return (
    <MainStyle>
      <div className="content">
        <div className="profile">
          <img
            src="/images/profile-new-transp.png"
            alt=""
            class="profile-img"
          />
        </div>
        <div className="name">{name}</div>
        <br />
        <div>
          <DiscordActivity />
        </div>
        <br />
        <div className="social-buttons">
          <a href={github_url}>
            <IconButton>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
          <a href={twitter_url}>
            <IconButton>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </a>
          <a href={linkedin_url}>
            <IconButton>
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </a>
          <a href={instagram_url}>
            <IconButton>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </a>
          <a href={facebook_url}>
            <IconButton>
              <FacebookIcon fontSize="large" />
            </IconButton>
          </a>
        </div>
        {/* <div className="buttons">
          <a href={resume_url}>
            <Button variant="contained " size="large">
              Resume
            </Button>
          </a>
          <a href={email}>
            <Button variant="contained " size="large">
              Email Me
            </Button>
          </a>
        </div> */}
      </div>
    </MainStyle>
  );
}

export default Main;
