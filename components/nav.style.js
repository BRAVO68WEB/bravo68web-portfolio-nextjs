import styled from "styled-components";

export default styled.nav`
	background: rgb(0, 0, 0, 0.2);
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100vw;
	display: flex;
	font-size: 1.5em;
	align-items: center;
	justify-content: space-between;
	.title {
		display: flex;
	}
	.links {
		display: flex;
		gap: 0.8rem;
		.link {
			padding: 5px 10px;
			margin-left: 10px;
			color: #fff;
			border-radius: 5px;
			&:hover {
				background-color: rgba(0,0,0, 0.5);
			}
		}
		@media (max-width: 900px) {
			display: none;
		}
	}
	.menu {
		button {
			color: white !important;
		}
		@media (min-width: 901px) {
			display: none;
		}
	}
	.indicator {
		.circle {
			height: 10px;
			width: 10px;
			border-radius: 100%;

			margin-top: 8px;
			margin-left: 5px;
			/* margin-right: auto;
      flex: start; */
		}
		.green {
			background-color: #6ffc03;
		}
		.red {
			background-color: #fc0703;
		}
	}
`;
