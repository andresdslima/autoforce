import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';

export const AppRoutes = () => {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/securedRoute"
						element={<RequireAuth>{/* <SecuredPage /> */}</RequireAuth>}
					/>
				</Routes>
			</ScrollToTop>
		</Router>
	);
};
