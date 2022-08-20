import * as S from './styled';
import car from '../../assets/images/car.png';
import fuel from '../../assets/icons/fuel.svg';
import engine from '../../assets/icons/engine.svg';
import thunder from '../../assets/icons/thunder.svg';
import speed from '../../assets/icons/speed.svg';
import { Link } from 'react-router-dom';

export const CarHighlight = () => {
	return (
		<S.SContainer>
			<div>
				<h3>
					Descubra o BMW Série 4 Cabrio
					<br />
					Cliente On-line tem Condições Especiais e aqui na Dealer BMW!
				</h3>
			</div>
			<S.SCarContainer>
				<div>
					<h1>
						A partir de <strong id="price">R$ 179.950</strong>
					</h1>
					<img className="car" src={car} alt="Carro BMW" />
				</div>
				<div>
					<h4>Destaques</h4>
					<div className="gridContainer">
						<div>
							<img src={fuel} alt="Combustível" />
							<span>
								Consumo
								<br />
								<strong>14,7 km/l</strong>
							</span>
						</div>
						<div>
							<img src={engine} alt="Motor" />
							<span>
								Cilindrada
								<br />
								<strong>999 cm3</strong>
							</span>
						</div>
						<div>
							<img src={thunder} alt="Raio" />
							<span>
								Potência
								<br />
								<strong>75 cv</strong>
							</span>
						</div>
						<div>
							<img src={speed} alt="Odómetro" />
							<span>
								Velocidade Máx.
								<br />
								<strong>154 km/h</strong>
							</span>
						</div>
					</div>
					{/* <Link to="/"> */}
					<S.SButton>
						<a href="/" target="_blank">
							TENHO INTERESSE
						</a>
					</S.SButton>
					{/* </Link> */}
				</div>
			</S.SCarContainer>
		</S.SContainer>
	);
};
