import styled from "styled-components";

export const AboutStyle = styled.div`
	background-color: var(--color1);
	overflow-y: scroll !important;
	overflow-x: hidden !important;
	padding: 2rem;
	height: 100vh;
	background-image: url("/images/pxfuel-6.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-blend-mode: difference;
	.default {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		padding-top: 8em;
		padding-bottom: 8em;
	}
	.content {
		margin-top: 1em;
		margin-bottom: 1em;
		font-weight: bold;
		font-size: 1.3em;
		color: var(--color14);
		padding-bottom: 2rem;
		background-color: var(--color15);
	}
	.content-2 {
		padding-top: 2rem;
		font-weight: bold;
		font-size: 1.3em;
		color: var(--color4);
	}
	.banner-image {
		width: 90%;
		padding: 1em;
		.banner-image-img {
			align-items: center;
			object-fit: contain;
			object-position: center;
			width: auto;
			height: auto;
		}
	}
	.lang-map {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-left: 1.7em;
		margin-right: 1.7em;
		align-items: center;
		padding-bottom: 2rem;
	}
	.lang-map-element {
		padding: 5px;
		border-radius: 20px;
		margin: 2px;
		font-weight: bold;
		box-shadow: 10px 9px 0px -3px #fffefe;
		font-size: 1.1em;
		color: #f5f5f5;
		flex: 0 1 20%;
		max-width: 127px;
	}
`;
