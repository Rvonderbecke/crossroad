import { useState, useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../contexts/userContext';
import { createAuthUserWithEmailAndPassword, signInAuthWithEmailAndPassword, addNewUserToUsersDb
} from '../util/fireBase';
const emptyUser = {
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
	const [formData, setForm] = useState(emptyUser);
	const nav = useNavigate();
    
	const {  email, password, confirmPassword } = formData;
	
	const handleOnChange = async (e) => {
		const { name, value } = e.target;
		await setForm(() => {
			return { ...formData, [name]: value }
		});
		
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await createAuthUserWithEmailAndPassword(email, password)
		nav('/user/dashboard')
		setForm(emptyUser);
	};
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		await signInAuthWithEmailAndPassword(email, password);
		nav('/user/dashboard');
		setForm(emptyUser);
	}

	return (
		<div className='auth-container'>
			<div className='info'>
				<span>Already Registered.</span>
			</div>
			<div className='innerContent'>
				<button>Register</button>
				<p>Register</p>
				<form onSubmit={handleSubmit}>
					<input type='email' name='email' value={email} onChange={handleOnChange} required/>
					<input type='password' name='password' value={password} onChange={handleOnChange} autoComplete="new-password" required />
					<input type='password' name='confirmPassword' value={confirmPassword} onChange={handleOnChange} autoComplete="new-password" required />
					<button type="submit">Submit</button>
				</form>
				<p>Login</p>
				<form onSubmit={handleLoginSubmit}>
					<input type='email' name='email' value={email} onChange={handleOnChange}  autoComplete="username" required/>
					<input type='password' name='password' value={password} onChange={handleOnChange} autoComplete="current-password"required />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;
