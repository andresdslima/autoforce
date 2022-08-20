import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const SContainer = styled(Container)`
	padding: 2rem 8.5rem 0 8.5rem;
	width: 100%;
	text-align: left;

	p {
		text-align: justify;
	}

	div {
		&#sub-container {
			border-bottom: 1px solid #e1e1e1;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
			padding-bottom: 2rem;
		}

		h1 {
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 44px;
		}

		p {
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
		}
	}

	@media (max-width: 768px) {
		padding: 0.75rem 1rem 1rem 1rem;

		div {
			&#sub-container {
				grid-template-columns: 1fr;
			}
		}
	}
`;
