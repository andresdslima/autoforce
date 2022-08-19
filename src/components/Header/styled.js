import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

export const SContainer = styled(Container)`
	background: #fff;
	padding: 0.75rem 8.5rem 1rem 8.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 100%;
`;

export const SButton = styled(Button)`
	background: ${props => props.color};
	border: none;
	border-radius: 50px;
	padding: 0.75rem 1.5rem;
	margin-left: 2rem;
	opacity: 1;

	a {
		color: #fff;
		margin-left: 0.5rem;

		img {
			margin-right: 0.5rem;
		}
	}

	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}
`;

export const SDealer = styled.img`
	border-right: 1px solid #000;
	padding-right: 1.5rem;
	margin-right: 1.5rem;
`;

export const SBmw = styled.img`
	margin-bottom: -10px;
`;
