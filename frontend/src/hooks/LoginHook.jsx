import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginHook = () => {
	const [login, setLogin] = useState({ errorMsj: null, email: '', password: '' });
	const { setIsLoggedIn, setAuthUser } = useAuth();
	
	const navigate = useNavigate();
	const doLogin = () => {
		if (login.email && login.password) {
			setLogin({ ...login, errorMsj: null });
			setIsLoggedIn(true);
			setAuthUser(login.email)
			navigate('/');
			return;
		}
		setLogin({ errorMsj: 'Tus datos son erroneos', email: '', password: '' });
		return;
	};

	return [login, setLogin, doLogin]
}

export default LoginHook