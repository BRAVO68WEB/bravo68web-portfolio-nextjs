import styled from "styled-components";

export const ExpStyle = styled.div`
	background-color: var(--color1);
	overflow-y: scroll !important;
	padding: 2rem;
	padding-top: 8rem;
	height: 100vh;

	.company {
		display: flex;
		padding: 1rem;
		background-color: var(--color11);
		border-radius: 1rem;
	}
	.company-exp-short {
		display: flex;
	}
	.tech-list {
		display: flex;
		gap: 0.3rem;
		.tech-name {
			padding: 0.5rem;
			border-radius: 0.2rem;
			background-color: var(--color2);
		}
		.tech-name:hover {
			background-color: var(--color3);
		}
	}
	.company-left {
		width: 25%;
		display: flex;
		flex-direction: column;
		gap: 0.2px;
		.company-img {
			width: 100%;
			height: auto;
			margin-bottom: 0.5rem;
			img {
				width: 100%;
				height: auto;
				margin: auto;
				max-height: 12rem;
				object-fit: contain;
				object-position: center;
			}
		}
	}

	.company-right {
		width: 75%;
		.company-exp-short {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 1rem;
			.company-role-name {
				font-size: 1.55rem;
				font-weight: 400;
				color: var(--color3);
				margin-bottom: 0.5rem;
			}
			.company-role-dur {
				font-size: 1.55rem;
				font-weight: 400;
				color: var(--color4);
				margin-bottom: 0.5rem;
			}
		}
		.company-role-desp {
			.company-role-desp-para {
				font-size: 1.1rem;
				font-weight: 400;
				margin-bottom: 0.8rem;
			}
		}
	}

	.company-info {
		align-items: center;
		justify-content: center;

		.company-name {
			color: var(--color3);
			font-size: 1.7rem;
			font-weight: 600;
			margin-bottom: 0.5rem;
		}
		.company-desp {
			font-size: 1.1rem;
			font-weight: 400;
			margin-bottom: 0.5rem;
		}
	}
	.all {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
`;
