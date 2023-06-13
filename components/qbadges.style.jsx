import styled from "styled-components";

export const QBStyles = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding-top: 15vh;
	background-image: url("images/pxfuel-5.jpg");
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	overflow-y: scroll !important;
	height: 100vh;
	.title {
		font-size: 2rem;
		font-weight: bold;
		background-color: var(--color4);
		color: var(--color3);
	}
	.default {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		/* height: 100vh; */
		padding-bottom: 3em;
		padding-top: 2em;
		.content {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			padding-top: 2em;
			padding-bottom: 2em;
			&:hover {
				filter: contrast(200%);
				-webkit-transform: translateX(-5px) translateY(-5px);
				transform: translateX(-5px) translateY(-5px);
				transition: 1s ease;
			}
			.content-description {
				width: 100%;
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
			}
			.content-description img {
				width: 225px;
			}
			.content-title {
				width: 100%;
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				word-break: break-word;
				white-space: pre-wrap;
				-moz-white-space: pre-wrap;
				justify-content: center;
				align-items: center;
				h1 {
					font-size: 1.5em;
					font-weight: bold;
					color: var(--color7);
					text-align: center;
					margin: 0;
					padding: 0;
					a {
						color: var(--color7);
						text-decoration: none;
						&:hover {
							color: var(--color3);
						}
					}
				}
			}
		}
	}
`;
