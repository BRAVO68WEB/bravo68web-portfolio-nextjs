import styled from "styled-components";

export const DicordActivityStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	width: 400px;
	min-height: 75px;
	background: rgb(131, 58, 180);
	background: linear-gradient(
		90deg,
		rgba(131, 58, 180, 1) 0%,
		rgba(253, 29, 29, 1) 50%,
		rgba(252, 176, 69, 1) 100%
	);
	border-radius: 6px;
	padding: 0.3em 0.8em;

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
			}
		}
	}
	.discord-messageBox {
		display: flex;
		flex-direction: column;
		margin-left: 1em;
		font-size: 0.9em;
	}
	.discord-message-application {
		font-size: 1.3em;
	}
	.discord-message-activity {
		font-size: 1.1em;
	}
`;
