import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

export const SContainer = styled(Container)`
	background: #000;
	padding: 0 8.5rem 1rem 8.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	* {
		color: #fff;
	}

	a {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		padding: 0.75rem 1rem 1rem 1rem;
	}
`;

export const SScrollUp = styled(Button)`
	background: #007bff;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	bottom: -1320px;
	right: 140px;

	@media (max-width: 768px) {
		bottom: -1915px;
	}

	@media (max-width: 425px) {
		bottom: -1965px;
		right: 70px;
	}
`;

export const SSubcontainer = styled.div`
	display: flex;
	flex-direction: ${props => props.flexDirection};
	align-items: ${props => props.alignItems};
	justify-content: space-between;
	border-bottom: ${props => props.border};
	width: 100%;
	padding: 0.5rem 0;

	* {
		margin: 0.5rem 0;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const SSocialContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
