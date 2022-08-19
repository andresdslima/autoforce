import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ScrollToTop } from './components/ScrollToTop';

export const AppRoutes = () => {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
};
