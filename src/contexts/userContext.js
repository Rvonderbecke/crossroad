import { useState, useEffect, createContext } from 'react';
import {
	onAuthStateChangedListener,
	getCurrentUserData,
	addNewUserToUsersDb,
} from '../util/fireBase';

export const UserContext = createContext({
	currentUser: null,
	setUser: () => {},
	userData: null,
	setUserData: () => {},
});

export const UserProvider = ({ children }) => {
	const [currentUser, setUser] = useState(null);
	const [userData, setUserData] = useState(null);
	const value = { currentUser, setUser, userData };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			setUser(user);
			
		});
		return unsubscribe;
	}, []);


	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
