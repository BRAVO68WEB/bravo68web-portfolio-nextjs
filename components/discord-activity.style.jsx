import styled from "styled-components";

export const DicordActivityStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	width: 400px;
	height: 135px;
	min-height: 80px;
	background: rgb(131, 58, 180);
	background: linear-gradient(180deg, #472DE8 0%, #2622E5 100%);
	border-radius: 6px;
	padding: 0.3em 0.8em;
	border-style: solid;
	border-width: 3.2px;

	.discord-icons {
		display: flex;
		/* margin-right: 2em; */
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
		/* position: absolute; */
		position: relative;
		.discord-large-icon {
			width: 80px;
			height: 80px;

			/* background-color: #61c626;  */
			img {
				max-width: 100%;
				object-fit: contain;
				border-radius: 6px;
				border-style: solid;
				border-width: 3.2px;
			}
		}
		.discord-small-icon {
			width: 25px;
			height: 25px;
			box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.3);
			border-radius: 50px;
			position: absolute;
			bottom: 6px;
			right: 1px;
			img {
				max-width: 100%;
				object-fit: contain;
				border-radius: 50px;
				border-style: solid;
				border-width: 3.2px;
			}
		}
	}
	.discord-messageBox {
		display: flex;
		flex-direction: column;
		margin-left: 1em;
		margin-top: -0.8em;
		// font-size: 0.9em;
	}
	.discord-message-application {
		color: #FFF;
		font-family: Source Code Pro;
		font-size: 20px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
	.discord-message-activity {
		display: flex;
		width: 276px;
		height: 44px;
		flex-direction: column;
		color: #FFF;
		font-family: Source Code Pro;
		font-size: 15px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	.discord-message-files {
		display: flex;
		width: 252px;
		height: 40px;
		flex-direction: column;
		color: #FFF;
		font-family: Source Code Pro;
		font-size: 13px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;

	}
`;
