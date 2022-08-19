import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

export const SContainer = styled(Container)`
	background: #000;
	padding: 2rem 8.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const SScrollUp = styled(Button)`
	background: #007bff;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	bottom: -675px;
	right: 150px;
`;
