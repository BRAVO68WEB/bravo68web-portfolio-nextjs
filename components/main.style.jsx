import styled from "styled-components";

export default styled.main`
	padding-top: 15px;
	display: flex;
	height: 100vh;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-image: url("/images/background.jpg");
	background-size: cover;
	background-position: center;
	#prof-pic {
		display: none;
	}

	#anime-pic:hover + #prof-pic {
		display: block;
	}

	.profile-img {
		border-radius: 50%;
		background: rgb(251, 167, 63);
		background: -moz-radial-gradient(
			circle,
			rgba(251, 167, 63, 1) 0%,
			rgba(252, 70, 107, 1) 100%
		);
		background: -webkit-radial-gradient(
			circle,
			rgba(251, 167, 63, 1) 0%,
			rgba(252, 70, 107, 1) 100%
		);
		background: radial-gradient(
			circle,
			rgba(251, 167, 63, 1) 0%,
			rgba(252, 70, 107, 1) 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fba73f",endColorstr="#fc466b",GradientType=1);
	}

	.backimage {
		filter: blur(8px);
		-webkit-filter: blur(8px);
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.social-buttons {
			button {
				margin: 5px;
			}
			.MuiSvgIcon-root {
				color: white;
			}
		}
		.buttons {
			button {
				background: var(--color1);
				border-radius: 20px;
				padding: 10px 15px;
				margin: 10px;
			}
		}
	}
	.profile {
		height: 250px;
		width: 250px;
		img {
			max-height: 100%;
			max-width: 100%;
		}
		margin-bottom: 20px;
	}
	.name {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.social-buttons {
		margin-top: 1rem;
		background: rgb(64, 63, 79);
		background: linear-gradient(
			90deg,
			rgba(64, 63, 79, 1) 0%,
			rgba(92, 84, 90, 1) 43%
		);
		border-radius: 12px;
	}
`;
