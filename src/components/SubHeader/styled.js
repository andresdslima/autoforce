import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const SContainer = styled(Container)`
	padding: 1rem 8.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;

	div {
		display: flex;
		justify-content: space-between;

		span {
			color: #666;
			font-style: normal;
			font-weight: 400;
			font-size: 12px;
			line-height: 16px;
			margin-top: 0.5rem;

			em {
				text-decoration: underline;
			}
		}

		h1 {
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 44px;
			color: #000;
		}
	}
`;
