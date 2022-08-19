import * as S from './styled';
import { Link } from 'react-router-dom';
import autoforce from '../../assets/images/autoforce.png';
import dealer from '../../assets/images/dealerWhite.png';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import youtube from '../../assets/icons/youtube.svg';
import pageUp from '../../assets/icons/pageUp.svg';

export const Footer = () => {
	const scrollUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<S.SContainer>
			<S.SScrollUp onClick={scrollUp}>
				<img src={pageUp} alt="Ir para o topo da página" />
			</S.SScrollUp>
			<div>
				<div>
					<Link to="/">
						<img src={dealer} alt="Dealer" />
					</Link>
				</div>
				<div>
					<a
						href="https://www.instagram.com/autoforcebr"
						target="_blank"
						rel="noreferrer"
					>
						<img src={instagram} alt="Instagram" />
					</a>
					<a
						href="https://www.linkedin.com/company/autoforcebrasil"
						target="_blank"
						rel="noreferrer"
					>
						<img src={linkedin} alt="LinkedIn" />
					</a>
					<a
						href="https://www.youtube.com/c/AutoForceMarketingDigitalAutomotivo"
						target="_blank"
						rel="noreferrer"
					>
						<img src={youtube} alt="YouTube" />
					</a>
				</div>
			</div>
			<div></div>
			<div>
				<Link to="/">
					<img src={autoforce} alt="Autoforce" />
				</Link>
			</div>
		</S.SContainer>
	);
};
