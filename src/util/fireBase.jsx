import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	sendPasswordResetEmail,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	setDoc,
	
} from 'firebase/firestore';

//import {  getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: "AIzaSyDZu2SUzcT-rw_-wQboIBp6YcRo80Z4ctM",
	authDomain: "crossroadfc.firebaseapp.com",
	projectId: "crossroadfc",
	storageBucket: "crossroadfc.appspot.com",
	messagingSenderId: "210634155253",
	appId: "1:210634155253:web:a3c513c90ae9dd1a3111bc"
};
		
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);
provider.setCustomParameters({
	prompt: 'select_account',
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logUserOut = () => signOut(auth);
//db stuff m
export const db = getFirestore();

//password stuff
export const resetUserPassword = ({ email }) => {
	sendPasswordResetEmail(auth, email);
};
//cutomer user function's
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	return user;
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
export const onAuthStateChangedListener = (callback) => {
	onAuthStateChanged(auth, callback);
	
	
};

//get data from firestore
//add user to database users

export const addNewUserToUsersDb = async (user, userData) => {
	const { fullName, email } = userData;
	console.log(user, fullName)
	console.log(auth)
	if (!auth) return;
	await setDoc(doc(db, "users", user.uid), {
		name: fullName,
		email: email,

	}, { merge: true });
	
}

//end db stuff
