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
`;

export const SButton = styled(Button)`
	background: #3754e2;
	border: none;
	border-radius: 50px;
	padding: 10px 40px;
	opacity: 1;
	color: #fff;
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;

	&:hover {
		opacity: 0.8;
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
			}
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

			span {
				margin-left: 1rem;

				strong {
					margin-left: 3.5rem;
				}
			}
		}
	}
`;
