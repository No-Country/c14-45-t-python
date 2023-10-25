import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';


export const useAuth = () => {
	return useContext(AuthContext);
}

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const value = { authUser, setAuthUser, isLoggedIn, setIsLoggedIn };

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};