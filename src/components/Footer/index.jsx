import * as S from './styled';
import { Link } from 'react-router-dom';
import autoforce from '../../assets/images/autoforce.png';
import dealer from '../../assets/images/dealerWhite.png';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import youtube from '../../assets/icons/youtube.svg';
import pageUp from '../../assets/icons/pageUp.svg';
import link from '../../assets/icons/link.svg';

export const Footer = () => {
	const scrollUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<S.SContainer>
			<S.SScrollUp onClick={scrollUp}>
				<img src={pageUp} alt="Ir para o topo da página" />
			</S.SScrollUp>
			<S.SSubcontainer
				alignItems="center"
				flexDirection="row"
				borderBottom="1px solid #fff"
			>
				<div>
					<Link to="/">
						<img src={dealer} alt="Dealer" />
					</Link>
				</div>
				<S.SSocialContainer>
					<span>SIGA-NOS:</span>
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
				</S.SSocialContainer>
			</S.SSubcontainer>
			<S.SSubcontainer
				alignItems="flex-start"
				flexDirection="column"
				borderBottom="1px solid #fff"
			>
				<span>
					<strong>Razão Social: </strong>AUTO FORCE PLATAFORMA DE MARKETING
					DIGITAL LTDA
				</span>
				<span>
					<strong>CNPJ: </strong>22.588.947/0001-06
				</span>
				<span>
					<strong>Endereço Matriz: </strong>Torre Business, Av. Amintas Barros,
					3700. Lagoa Nova, Natal/RN. CEP 59075-250{' '}
					<a
						href="https://g.page/autoforcebr?share"
						target="_blank"
						rel="noreferrer"
					>
						Ver Mapa <img src={link} alt="Link para o mapa" />
					</a>
				</span>
			</S.SSubcontainer>
			<S.SSubcontainer
				alignItems="center"
				flexDirection="row"
				borderBottom="none"
			>
				<Link to="/">
					<img src={autoforce} alt="Autoforce" />
				</Link>
				<div>
					<small>
						© Copyright 2021 - AutoForce - Todos os direitos reservados
					</small>
					<br />
					<small>
						Confira a nossa{' '}
						<a href="/" target="_blank" rel="noreferrer">
							Politica de privacidade
						</a>
						.
					</small>
				</div>
			</S.SSubcontainer>
		</S.SContainer>
	);
};
