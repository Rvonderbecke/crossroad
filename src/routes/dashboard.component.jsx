import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

//my stuff
import InfoCard from '../components/info-card.component';

const cardInfo = [
	{
		imageURL: 'images/yellowTape',
		title: 'Basic Movements',
		description: 'Yellow Tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Kicking Combinations',
		description: 'Red Tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Poomsae / Forms',
		description: 'Green Tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Breaking Techniques',
		description: 'Blue Tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Verbal Commands',
		description: 'Brown Tape',
	},
];

const Dashboard = () => {
	const { currentUser } = useContext(UserContext);
	const nav = useNavigate();

	return (
		<div className='dashboard-container'>
			<div className='sideBar'>
				<div className='nav-container'>
					<input class='checkbox' type='checkbox' name='' id='' />
					<div className='hamburger-lines'>
						<span className='line line1'></span>
						<span className='line line2'></span>
						<span className='line line3'></span>
					</div>
					<div className='menu-items'>
						<label htmlFor="cal" id='cal'>Calender</label>
						<button className='cal'name='cal'/>
						<label htmlFor="reg" id='reg'>Documents</label>
						<button className='reg'name='reg'/>
						<label htmlFor="event" id='event'>Events</label>
						<button className='event'name='event'/>
						<label htmlFor="profile" id='profile'>Profile</label>
						<button className='profile'name='profile'/>
					</div>
				</div>
			</div>
			<div className='main-content'>
				{cardInfo.map((item) => (
					<InfoCard item={item} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
