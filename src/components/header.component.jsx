import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

//my stuff
import Navigation from './navigation.component';
import { ReactComponent as CrLogo } from '../assets/images/Crossroads-Logo_No-Name.svg';
import DropBox from './dropbox.component';

const Header = () => {
	return (
		<Fragment>
			<div
				className='header-container'
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					borderBottom: '1px solid black',
				}}>
				<div className='logoBox' style={{ display: 'flex' }}>
					
						<CrLogo className='logo' />
					
					<span>Crossroad Family Center</span>
				</div>
				<DropBox />
				<Navigation />
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Header;
