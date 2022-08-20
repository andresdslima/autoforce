import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SubHeader } from '../../components/SubHeader';
import { CarHighlight } from '../../components/CarHighlight';
import { CarDescription } from '../../components/CarDescription';
import { CarVideo } from '../../components/CarVideo';

export const Home = () => {
	return (
		<>
			<Header />
			<SubHeader />
			<CarHighlight />
			<CarDescription />
			<CarVideo />
			<Footer />
		</>
	);
};
