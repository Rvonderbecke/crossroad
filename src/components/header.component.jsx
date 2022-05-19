import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

//my stuff
import Navigation from './navigation.component';

const Header = () => {
	return (
		<Fragment>
			<div className='header-container'>
				<div className='logoBox'>
					<div className='innerBox'>
						<img src="/images/CR_Logo.png" alt="" className='logo'/>
						<img src="/images/CrLogoBar.png" alt="" className='logoBar'/>
					</div>
					<div className='nav'>
						<h1>Crossroad Family Center</h1>
						<Navigation />
					</div>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Header;
