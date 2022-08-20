/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './styled';
import { useState, useEffect } from 'react';
import car from '../../assets/images/car.png';
import fuel from '../../assets/icons/fuel.svg';
import engine from '../../assets/icons/engine.svg';
import thunder from '../../assets/icons/thunder.svg';
import speed from '../../assets/icons/speed.svg';
import pageUp from '../../assets/icons/pageUp.svg';
import bmw from '../../assets/audio/bmw.mp3';
// https://www.bmw.in/en/topics/Fascination-BMW/bmw-engine-sound.html

export const CarHighlight = () => {
	const useAudio = url => {
		const [audio] = useState(new Audio(url));
		const [playing, setPlaying] = useState(false);

		const toggle = () => setPlaying(!playing);

		useEffect(() => {
			playing ? audio.play() : audio.pause();
		}, [playing]);

		useEffect(() => {
			audio.addEventListener('ended', () => setPlaying(false));

			return () => {
				audio.removeEventListener('ended', () => setPlaying(false));
			};
		}, []);

		return [playing, toggle];
	};

	// eslint-disable-next-line no-unused-vars
	const [playing, toggle] = useAudio(bmw);

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
					<div className="tooltip">
						<span className="tooltiptext">Start / Stop</span>
						<img className="car" src={car} alt="Carro BMW" onClick={toggle} />
					</div>
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
					<div id="mobile">
						<S.SScroll>
							<img src={pageUp} alt="Seta para a direita" />
						</S.SScroll>
						<S.SButton>
							<a
								href="https://site.autoforce.com"
								target="_blank"
								rel="noreferrer"
							>
								TENHO INTERESSE
							</a>
						</S.SButton>
					</div>
				</div>
			</S.SCarContainer>
		</S.SContainer>
	);
};
