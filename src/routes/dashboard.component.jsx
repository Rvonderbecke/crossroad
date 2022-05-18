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
				<div className='dots'>
					<div class='one'>&#8226;</div>
					<div class='two'>&#8226;</div>
					<div class='three'>&#8226;</div>
					<div class='four'>&#8226;</div>
					<div class='five'>&#8226;</div>
					<div class='six'>&#8226;</div>
				</div>
				<span className='x'>&#x2715;</span>
				<ul>
					<li>
						<img class='calendar' src='/images/calendar.png' alt='' />
						<p>Calander</p>
					</li>
					<li>
						<img class='reg' src='/images/registerOnline.png' alt='' />

						<p>Online Registration</p>
					</li>
					<li>
						<img class='event' src='/images/events.png' alt='' />

						<p>Event Sign</p>
					</li>
					<li>
						<NavLink to='/user/profile'>
							<img class='user' src='/images/user.png' alt='' />
							Account Profile
						</NavLink>
					</li>
				</ul>
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
