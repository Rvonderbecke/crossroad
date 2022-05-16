import React from 'react';
import { Routes, Route } from 'react-router-dom';

//my stuff
import InfoCard from '../components/info-card.component';

const cardInfo = [
	{
		imageURL: 'images/yellowTape',
		title: 'Basic Movements',
		description: 'Yellow tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Kicking Combinations',
		description: 'Red tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Poomsae / Forms',
		description: 'Green tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Breaking Techniques',
		description: 'Blue tape',
	},
	{
		imageURL: 'images/yellowTape',
		title: 'Verbal Commands',
		description: 'Brown tape',
	},
];

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<div className='sideBar'>
				<div className='dots'>
					<span>&#8226</span>
					<span>&#8226</span>
					<span>&#8226</span>
					<span>&#8226</span>
					<span>&#8226</span>
					<span>&#8226</span>
				</div>
				<span>X</span>
				<ul>
					<li>
						<span>Image</span>
						<p>Calander</p>
					</li>
					<li>
						<span>Image</span>
						<p>Online Registration</p>
					</li>
					<li>
						<span>Image</span>
						<p>Event Sign</p>
					</li>
					<li>
						<span>Image</span>
						<p>Account Profile</p>
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
