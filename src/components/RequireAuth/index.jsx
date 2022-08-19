// Exemplo simples de rota protegida.
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }) {
	const data = JSON.parse(localStorage.getItem('data'));
	const isLogged = data ? true : false;
	let location = useLocation();

	const result = !isLogged ? (
		<Navigate to="/login" state={{ from: location }} replace />
	) : (
		children
	);

	return result;
}
