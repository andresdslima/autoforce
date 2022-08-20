import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const SContainer = styled(Container)`
	padding: 0 8.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;

	h3 {
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 33px;
		margin: 2rem 0;
	}

	iframe {
		border-bottom: 1px solid #e1e1e1;
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		width: 100%;
		height: 100vh;
	}

	p {
		text-align: justify;
		font-style: normal;
		font-size: 14px;
		line-height: 19px;
		margin-bottom: 4rem;
	}

	@media (max-width: 768px) {
		padding: 0.75rem 1rem 1rem 1rem;
	}
`;
