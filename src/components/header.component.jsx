import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

//my stuff
import Navigation from './navigation.component';
import DropBox from './dropbox.component';

const Header = () => {
	const [showDrop, setShowDrop] = useState(false);
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
