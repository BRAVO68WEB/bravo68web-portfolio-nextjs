import styled from "styled-components";

export default styled.div`
	padding: 0.8rem;
	width: 230px;
	height: 320px;
	box-sizing: border-box;
	background-color: var(--color12);
	border-radius: 1rem;
	margin: 5px;
	* {
		margin-top: inherit;
	}
	.type {
		color: #92dcf3;
		/* padding: 4px;   */
	}
	.date {
		font-weight: bold;
		font-size: 1.2rem;
	}
	.card-logo {
		display: flex;
		/* width: 100%; */
		justify-content: center;
		align-items: center;
		background-color: #fff;
		border-radius: 10px;

		img {
			width: 100%;
			object-fit: cover;
			/* object-position: 0px -10px; */
		}
		/* margin: 5px 5px 0px 0px; */
	}
`;
