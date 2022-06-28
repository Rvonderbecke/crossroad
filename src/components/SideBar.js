import MenuItem from '../components/MenuItem';

const SideBar = ({menuArray}) => {
	return (
		<aside className='sideBar'>
			<div className='nav-container'>
				<input className='checkbox' type='checkbox' name='' id='' />
				<div className='hamburger-lines'>
					<span className='line line1'></span>
					<span className='line line2'></span>
					<span className='line line3'></span>
				</div>
				<div className='menu-items'>
					{menuArray.map((item, idx) => (
						<MenuItem
							item={item} key={idx}
						/>
					))}
				</div>
			</div>
		</aside>
	);
};

export default SideBar;


