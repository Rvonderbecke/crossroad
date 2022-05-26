import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import {
	createAuthUserWithEmailAndPassword,
	signInAuthWithEmailAndPassword,
	signInWithGoogle,
	addNewUserToUsersDb,
} from '../util/fireBase';
const emptyUser = {
	email: '',
	password: '',
	confirmPassword: '',
};

const Auth = () => {
	const [formData, setForm] = useState(emptyUser);
	const { setUserData } = useContext(UserContext);
	const nav = useNavigate();

	const { email, password, confirmPassword } = formData;

	const handleOnChange = async (e) => {
		const { name, value } = e.target;
		await setForm(() => {
			return { ...formData, [name]: value };
		});
	};
	const handleRegSubmit = async (e) => {
		e.preventDefault();
		await createAuthUserWithEmailAndPassword(email, password);
		nav('/user/dashboard');
		setForm(emptyUser);
	};
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		await signInAuthWithEmailAndPassword(email, password);
		nav('/user/dashboard');
		setForm(emptyUser);
	};
	const handleGoogleLogin = async () => {
		await signInWithGoogle();
	};

	return (
		<div className='auth-container'>
			<div className='logo-container'>
				<img id='logo' src='/' alt='' />
			</div>
			<div className='form-container'>
				<img src='/images/CR_Logo.svg' alt='' className='logo' />
				<img src='/images/CrLogoBar.png' alt='' className='logoBar' />
				<h2>Crossroad Family Center</h2>
				<p>Register Here</p>
				<form onSubmit={handleRegSubmit}>
					<input
						type='email'
						placeholder='Register your email'
						name='email'
						value={email}
						onChange={handleOnChange}
						required
					/>
					<input
						type='password'
						name='password'
						placeholder='Enter a New Password'
						value={password}
						onChange={handleOnChange}
						autoComplete='new-password'
						required
					/>
					<input
						type='password'
						name='confirmPassword'
						placeholder='Retype Password'
						value={confirmPassword}
						onChange={handleOnChange}
						autoComplete='new-password'
						required
					/>
					<button type='submit'>Register</button>
				</form>
				<p>Login Here</p>
				<form onSubmit={handleLoginSubmit}>
					<input
						type='email'
						name='email'
						placeholder='Registered Email'
						value={email}
						onChange={handleOnChange}
						autoComplete='username'
						required
					/>
					<input
						type='password'
						name='password'
						placeholder='Current Password'
						value={password}
						onChange={handleOnChange}
						autoComplete='current-password'
						required
					/>
					<div className='button-box'>
						<button type='submit'>Login</button>
						<button type='button' onClick={handleGoogleLogin} className='googleBtn'>
							Login with Google
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Auth;
