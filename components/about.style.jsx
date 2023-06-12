import styled from "styled-components";

export const AboutStyle = styled.div`
	background-color: var(--color1);
	overflow-y: scroll !important;
	margin: 0;
	top: 50%;
	left: 50%;
	height: 100vh;
	padding-top: 12em;
	/* padding-bottom: 8em; */
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	/* position: relative; */
	.default {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		padding-top: 8em;
		padding-bottom: 8em;

		/* position: absolute; */
		/* top: 0; */

		/* overflow-y: auto; */
	}
	.content {
		margin-top: 1em;
		margin-bottom: 1em;
		margin-left: 1.3em;
		margin-right: 1.3em;
		font-weight: bold;
		font-size: 1.3em;
		color: var(--color3);
	}
	.content-2 {
		margin-top: 1em;
		margin-bottom: 1em;
		margin-left: 1.3em;
		margin-right: 1.3em;
		font-weight: bold;
		font-size: 1.3em;
		color: var(--color4);
		img {
			width: 90%;
			padding: 1em;
		}
	}
	.lang-map {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-left: 1.7em;
		margin-right: 1.7em;
		align-items: center;
	}
	.lang-map-element {
		padding: 5px;
		border-radius: 20px;
		margin: 2px;
		/* background-color: #${Math.random().toString(16).substring(2, 6)}; */
		/* background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    ); */
		font-weight: bold;
		box-shadow: 10px 9px 0px -3px #fffefe;
		font-size: 1.1em;
		color: #f5f5f5;
		flex: 0 1 20%;
		max-width: 127px;
	}
`;
