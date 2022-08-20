import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

export const SContainer = styled(Container)`
	background-color: #fff;
	padding: 0 8.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;

	h3 {
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 33px;
		color: #666;
		width: 65%;
		margin-top: 1rem;
	}

	h4 {
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 33px;
	}

	@media (max-width: 768px) {
		padding: 0.75rem 1rem 0 1rem;

		h3 {
			width: 100%;
			font-size: 24px;
		}

		h4 {
			text-align: center;
		}
	}
`;

export const SButton = styled(Button)`
	background: #3754e2;
	border: none;
	border-radius: 50px;
	padding: 10px 40px;
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;

	a {
		color: #fff;
	}

	&:hover {
		background: #304acb;
		cursor: pointer;
	}
`;

export const SCarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 3px solid #333;
	padding-bottom: 5rem;

	div {
		width: 100%;

		img {
			&.car {
				width: 85%;
				transition: all 0.3s ease-in-out;

				&:hover {
					transform: scale(1.1);
					cursor: pointer;
				}
			}
		}

		&.tooltip {
			position: relative;
			display: inline-block;
		}

		span {
			&.tooltiptext {
				visibility: hidden;
				width: 120px;
				background-color: #555;
				color: #fff;
				text-align: center;
				border-radius: 6px;
				padding: 5px 0;
				position: absolute;
				z-index: 1;
				width: 120px;
				bottom: 75%;
				left: 50%;
				margin-left: -90px;

				&::after {
					content: '';
					position: absolute;
					top: 100%;
					left: 50%;
					margin-left: -5px;
					border-width: 5px;
					border-style: solid;
					border-color: #555 #0000 #0000 #0000;
				}
			}
		}

		&.tooltip:hover span.tooltiptext {
			visibility: visible;
		}

		strong {
			color: #3754e2;
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
			line-height: 22px;

			&#price {
				color: #333;
				font-size: 32px;
			}
		}

		h1 {
			font-style: normal;
			font-weight: 400;
			font-size: 32px;
			line-height: 44px;
			color: #333;
			border-left: 4px solid #e5e5e5;
			padding-left: 1rem;
			margin-bottom: 1rem;
		}

		span {
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
			line-height: 22px;
		}

		&.gridContainer {
			display: grid;
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 1fr 1fr;
			margin: 2rem 0;
			row-gap: 2rem;

			div {
				display: flex;

				span {
					margin-left: 1rem;
				}
			}
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;

		div {
			&.gridContainer {
				grid-template-columns: 1fr 1fr 1fr 1fr;
				grid-template-rows: 1fr;
				overflow-x: auto;

				div {
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 0 1rem;
					padding: 0 2rem;

					img {
						width: 50%;
					}

					span {
						margin: 0;
						margin-top: 0.5rem;
					}
				}
			}

			&#mobile {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1rem;
			}
		}
	}

	@media (max-width: 425px) {
		div {
			&.gridContainer {
				margin-bottom: 0;
			}
		}
	}
`;

export const SScroll = styled(Button)`
	border: none;
	background-color: transparent;
	display: none;
	transform: rotate(90deg);

	@media (max-width: 425px) {
		display: block;
	}
`;
