import styled from "styled-components";

export default styled.div`
	padding: 5%;
	width: 230px;
	height: 100%;
	box-sizing: border-box;
	background-color: #aa78f6ac;
	border-radius: 5px;
	box-shadow: 10px 9px 0px -3px #7b3ea7;
	margin: 8px;
	align-content: stretch;
	* {
		margin-top: inherit;
	}
	.type {
		color: #9bdcf0;
		/* padding: 4px;   */
	}
	.card-logo {
		float: inline-end;
		border-radius: 100px;
		display: flex;
		align-items: center;
	}

	// On hover of the card, the card will grow in size
	&:hover {
		transform: scale(1.05);
		transition: 0.3s;
	}
`;
