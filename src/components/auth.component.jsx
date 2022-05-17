import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/userContext';
import { createAuthUserWithEmailAndPassword, logUserOut, signInAuthWithEmailAndPassword, addNewUserToUsersDb
} from '../util/fireBase';
const emptyUser = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
	const [formData, setForm] = useState(emptyUser);
    const { currentUser, setUser } = useContext(UserContext);
    
	const { fullName, email, password, confirmPassword } = formData;
	
	const handleOnChange = async (e) => {
		const { name, value } = e.target;
		await setForm(() => {
			return { ...formData, [name]: value }
		});
		
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await createAuthUserWithEmailAndPassword(email, password)
	};
	const handleSignIn = async () => {
		const { email, password } = formData;
		await signInAuthWithEmailAndPassword(email, password);

	};
	useEffect(() => {
		const addUser = async () => {
			await addNewUserToUsersDb(currentUser, formData);
		}
		addUser();
	},[currentUser])

	const handleSignOut = () => {
		logUserOut();
	};
	return (
		<div className='auth-container'>
			<div className='info'>
				<p>Register</p>
				<span>Already Registered.</span>
			</div>
			<div className='innerContent'>
				<button>Register</button>
				{currentUser ? (<button onClick={handleSignOut}>Sign Out</button>) : (<button onClick={handleSignIn}>Sign In</button>)}
				
				<p>Some SHit</p>
				<p>Some More shit</p>
				<form onSubmit={handleSubmit}>
					<input type='text' name='fullName' value={fullName} onChange={handleOnChange} required/>
					<input type='email' name='email' value={email} onChange={handleOnChange} required/>
					<input type='password' name='password' value={password} onChange={handleOnChange} required />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;
