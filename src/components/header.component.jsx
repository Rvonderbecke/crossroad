import { Fragment, useState, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

//my stuff
import Navigation from './navigation.component';

const Header = () => {
	const [show, setShow] = useState(true);
	const loc = useLocation();

	useLayoutEffect(() => {
		loc.pathname === '/auth' ? setShow(false) : setShow(true);
	}, [loc.pathname, setShow]);

	return (
		<Fragment>
			{show && (
				<div className='header-container'>
					<div className='logoBox'>
						<div className='innerBox'>
							<img src='/images/CR_Logo.png' alt='' className='logo' />
							<img src='/images/CrLogoBar.png' alt='' className='logoBar' />
						</div>
						<div className='nav'>
							<h1>Crossroad Family Center</h1>
							<Navigation />
						</div>
					</div>
				</div>
			)}
			<Outlet />
		</Fragment>
	);
};

export default Header;
