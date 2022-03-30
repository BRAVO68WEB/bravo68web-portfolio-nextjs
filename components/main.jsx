import React from "react";
import MainStyle from "./main.style";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { name } from "config";
import DiscordActivity from "./discord-activity";

function Main() {
  return (
    <MainStyle>
      <div className="content">
        <div className="profile">
          <img src="/images/profile.png" alt="" />
        </div>
        <div className="name">{name}</div>
        <div>
          <DiscordActivity />
        </div>
        <div className="social-buttons">
          <IconButton>
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <FacebookIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="buttons">
          <Button variant="contained " size="large">
            Resume
          </Button>
          <Button variant="contained " size="large">
            Email Me
          </Button>
        </div>
      </div>
    </MainStyle>
  );
}

export default Main;
