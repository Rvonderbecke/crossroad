import React from 'react';
import ImageLink from '../components/image-link.component';

const navImages = [
	{
		title: 'Taekwondo',
		imageURL: 'images/belt.svg',
		location: 'taekwondo',
	},
	{
		title: 'Trip Outreach',
		imageURL: 'images/gradCap.svg',
		location: 'afterschool',
	},
	{
		title: 'Behavioral Health',
		imageURL: 'images/heart.svg',
		location: 'behavioral',
	},
	{
		title: 'Foster Center',
		imageURL: 'images/home.svg',
		location: 'foster',
	},
];

const Home = () => {
	return (
		<>
			<div className='home-container'>
				<div className='image-link-container'>
					{navImages.map((item, idx) => {
						return (
							<div className='column'>
								<ImageLink key={idx} image={item} />
								<h2>{item.title}</h2>
							</div>
						);
					})}
				</div>
			</div>
			<div className='button-container'>
				<button>Join CRFC</button>
				<button>Who We Are</button>
				<button>What We Do</button>
				<button>Donate</button>
			</div>
		</>
	);
};

export default Home;
