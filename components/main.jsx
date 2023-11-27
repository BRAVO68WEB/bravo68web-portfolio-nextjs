import React, { useEffect, useState } from "react";
import MainStyle from "./main.style";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SvgIcon from "@mui/material/SvgIcon";

import {
	name,
	github_url,
	linkedin_url,
	// facebook_url,
	hackthebox_url,
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
					<a href={hackthebox_url}>
						<IconButton>
							<SvgIcon fontSize="large">
								<path d="m22.5106 6.4566.0008-.0123a.888.888 0 0 0-.2717-.6384c-.0084-.0084-.018-.0155-.0267-.0235-.0186-.0166-.0371-.0333-.0572-.0484-.0193-.0147-.04-.0276-.0607-.0406-.0096-.006-.0182-.0131-.0281-.0188L12.4576.1266a.891.891 0 0 0-.9223.0043L1.933 5.6744c-.0107.0062-.0203.014-.0307.0205-.0073.0047-.015.008-.0223.0128-.007.0047-.013.0106-.02.0155a.8769.8769 0 0 0-.147.1333l-.0026.003a.8872.8872 0 0 0-.2218.5847l.0009.014c-.0002.0088-.0015.0176-.0015.0264v11.0708c0 .3277.1802.6288.469.7836l9.5986 5.5417c.0076.0044.0158.0075.0236.0117a.8754.8754 0 0 0 .166.0687c.0134.004.0266.0083.0401.0117a.8793.8793 0 0 0 .072.0142c.0117.0019.0232.0045.0349.006a.835.835 0 0 0 .2157 0c.0117-.0015.0232-.0041.0348-.006a.9.9 0 0 0 .072-.0142c.0135-.0034.0267-.0077.04-.0117a.895.895 0 0 0 .0646-.0217.9134.9134 0 0 0 .1015-.047c.0078-.0042.016-.0072.0236-.0117l9.5986-5.5417a.8888.8888 0 0 0 .469-.7836V6.4779c0-.0071-.0012-.0142-.0014-.0213zM5.2543 6.0822l6.5367-3.774a.4182.4182 0 0 1 .4182 0l6.5366 3.774a.4182.4182 0 0 1 0 .7243l-6.5367 3.774a.4182.4182 0 0 1-.4182 0l-6.5366-3.774a.4182.4182 0 0 1 0-.7243zm5.6134 14.3449a.4172.4172 0 0 1-.626.3613L3.718 17.0218a.4173.4173 0 0 1-.2086-.3613V9.1279a.4172.4172 0 0 1 .6258-.3613l6.524 3.7666a.4172.4172 0 0 1 .2086.3614v7.5325zm9.623-3.7666a.4173.4173 0 0 1-.2086.3613l-6.5239 3.7666a.4172.4172 0 0 1-.6259-.3613v-7.5325c0-.149.0796-.2868.2087-.3614l6.5239-3.7666a.4172.4172 0 0 1 .6258.3613v7.5326z" />
							</SvgIcon>
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
