import * as S from './styled';
import dealer from '../../assets/images/dealer.png';
import bmw from '../../assets/images/bmw.png';
import phone from '../../assets/icons/phone.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<S.SContainer>
			<div>
				<Link to="/">
					<S.SDealer src={dealer} alt="Dealer" />
				</Link>
				<Link to="/">
					<S.SBmw src={bmw} alt="BMW" />
				</Link>
			</div>
			<div>
				<S.SButton id="mobile">
					<a href="tel:11888888888" target="_blank" rel="noreferrer">
						<img src={phone} alt="Ligue agora" />
						LIGUE AGORA
					</a>
				</S.SButton>
				<S.SButton name="whatsapp">
					<a
						href="https://api.whatsapp.com/send?phone=5511999999999"
						target="_blank"
						rel="noreferrer"
					>
						<img src={whatsapp} alt="Whats App" />
						WHATSAPP
					</a>
				</S.SButton>
			</div>
		</S.SContainer>
	);
};
