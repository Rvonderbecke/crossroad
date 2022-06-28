import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

//my stuff
import InfoCard from '../components/info-card.component';
import SideBar from '../components/SideBar';


const cardInfo = [
	{
		imageURL: 'images/yellowTape',
		title: 'Basic Movements',
		description: 'Yellow Tape',
		color: '#fcd000',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Kicking Combinations',
		description: 'Red Tape',
		color: '#d62828',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Poomsae / Forms',
		description: 'Green Tape',
		color: '#5fab77',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Breaking Techniques',
		description: 'Blue Tape',
		color: '#219ebc',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Verbal Commands',
		description: 'Brown Tape',
		color: '#8E4D0D',
	},
];


const Dashboard = () => {
	const { userData } = useContext(UserContext);
	const nav = useNavigate();

	const menuArray = [
		{
			labelText: 'Calender',
			className: 'cal',
			htmlFor: 'cal',
			id: 'cal',
			name: 'cal'
	
		}, {
			labelText: 'Docuemnts',
			className: 'reg',
			htmlFor: 'reg',
			id: 'reg',
			name: 'reg'
	
		}, {
			labelText: 'Events',
			className: 'event',
			htmlFor: 'event',
			id: 'event',
			name: 'event'
	
		}, {
			labelText: 'Profile',
			className: 'profile',
			htmlFor: 'profile',
			id: 'profile',
			name: 'profile'
	
		}];
	
	return (
		<div className='dashboard-container'>
			<SideBar menuArray={menuArray} />
			<div className='main-content'>
				{cardInfo.map((item) => (
					<InfoCard item={item} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
