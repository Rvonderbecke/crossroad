import { useState, useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import { createAuthUserWithEmailAndPassword } from '../util/fireBase';
const emptyUser = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
	const [formData, setForm] = useState(emptyUser);
    const { setUser } = useContext(UserContext);
    
	const { fullName, email, password, confirmPassword } = formData;
	
	const handleOnChange = async (e) => {
		const { name, value } = e.target;
		await setForm(() => {
			return { ...formData, [name]: value }
		});
		
	};
	console.log(formData)
	const handleSubmit = async (e) => {
		e.preventDefault();
		await createAuthUserWithEmailAndPassword(email, password)
	};
	return (
		<div className='auth-container'>
			<div className='info'>
				<p>Register</p>
				<span>Already Registered.</span>
			</div>
			<div className='innerContent'>
				<button>Register</button>
				<button>Sign In</button>
				<p>Some SHit</p>
				<p>Some More shit</p>
				<form onSubmit={handleSubmit}>
					<input type='text' name='fullName' value={fullName} onChange={handleOnChange}/>
					<input type='email' name='email' value={email} onChange={handleOnChange}/>
					<input type='password' name='password' value={password} onChange={handleOnChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;
