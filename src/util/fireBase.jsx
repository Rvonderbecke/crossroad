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
	getDoc,
	setDoc,
	collection,
	writeBatch,
	getDocs,
	query,
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

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	//builds the batch can be used to send single transactions??
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('done');
};

//set single data value maybe??
//db.collection('users').doc(user_id).set({foo:'bar'}, {merge: true})
export const createAuthUserDoc = async (userAuth, additionalInfo) => {
};

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
