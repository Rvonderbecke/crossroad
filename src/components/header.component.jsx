import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

//my stuff
import Navigation from './navigation.component';
import { ReactComponent as CrLogo } from '../assets/images/CR_Logo.svg';
import { ReactComponent as CrLogoBar } from '../assets/images/navBar.svg';
import DropBox from './dropbox.component';

const Header = () => {
	const [showDrop, setShowDrop] = useState(false);
	return (
		<Fragment>
			<div className='header-container'>
				<div className='logoBox'>
					<div className='innerBox'>
						<CrLogo className='logo' />
						<CrLogoBar className='logoBar' />
					</div>
					<div className='nav'>
						<h1>Crossroad Family Center</h1>
						<div className='dropBox-label'>
							<span>Programs &#11167;</span>
							{showDrop && <DropBox />}
						</div>
						<Navigation />
					</div>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Header;
