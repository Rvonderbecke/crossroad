import { Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

import { logUserOut } from '../util/fireBase';

const Navigation = () => {
	const { currentUser, userData } = useContext(UserContext);
	
	
  const nav = useNavigate();

	const handleSignOut = () => {
    logUserOut();
    nav('/')
	};

	return (
		<div className='navigation-container'>
			{!currentUser ? (
				<Link to='auth'>
					<button>Sign In</button>
					<button>Sign Up</button>
				</Link>
			) : (
					<button onClick={handleSignOut}>Welcome {userData && userData.profile.name}, Logout</button>
			)}
		</div>
	);
};

export default Navigation;
