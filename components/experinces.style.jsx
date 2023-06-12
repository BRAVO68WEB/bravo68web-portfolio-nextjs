import styled from "styled-components";

export const ExpStyle = styled.div`
	background-color: var(--color1);
	overflow-y: scroll !important;
	margin: 0;
	top: 50%;
	left: 50%;
	height: 100vh;
	padding-top: 12em;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
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
`;
