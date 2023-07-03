import React, { useEffect, useState } from "react";
import MainStyle from "./main.style";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import SvgIcon from "@mui/material/SvgIcon";

import {
	name,
	github_url,
	linkedin_url,
	facebook_url,
	twitter_url,
	// email,
	// resume_url,
	instagram_url,
	mastodon_url,
} from "config";
import DiscordActivity from "./discord-activity";

function Main() {
	useEffect(() => {
		const animePic = document.getElementById("anime-pic");
		const profPic = document.getElementById("prof-pic");

		animePic.addEventListener("mouseover", function () {
			animePic.style.display = "none";
			profPic.style.display = "block";
		});

		profPic.addEventListener("mouseout", function () {
			animePic.style.display = "block";
			profPic.style.display = "none";
		});
	}, []);

	return (
		<MainStyle>
			<div className="content">
				<div className="profile">
					<img
						src="/images/profile-new-transp.png"
						alt=""
						className="profile-img"
						id="anime-pic"
					/>
					<img
						src="/images/anime-profile-pic.png"
						alt=""
						className="profile-img"
						id="prof-pic"
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
					<a href={mastodon_url} rel="me">
						<IconButton>
							<SvgIcon fontSize="large">
								<path d="M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z" />
							</SvgIcon>
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
