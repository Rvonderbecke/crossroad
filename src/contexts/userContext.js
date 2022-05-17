import { useState, useEffect, createContext } from 'react';
import { onAuthStateChangedListener} from '../util/fireBase';

export const UserContext = createContext({
    currentUser: null,
    setUser: ()=>{}
})




export const UserProvider = ({ children }) => {
    const [currentUser, setUser]= useState(null)
    const value = { currentUser, setUser };


	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				console.log(user.uid)
			}
			setUser(user)
		});

		return unsubscribe;
	}, []);




    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}