import React from 'react';
import ImageLink from '../components/image-link.component';

const navImages = [
  {
    title: 'Taekwondo',
    imageURL: 'images/belt.svg',
    location: 'taekwondo'
  },
  {
    title: 'Trip Outreach',
    imageURL: 'images/gradCap.svg',
    location: 'afterschool'
  },
  {
    title: 'Behavioral Health',
    imageURL: 'images/heart.svg',
    location: 'behavioral'
  },
  {
    title: 'Foster Center',
    imageURL: 'images/home.svg',
    location: 'foster'
	},
];

const Home = () => {
	return (
		<div className='home-container'>
			<h1>We have the programs your family needs</h1>
			<div className='image-link-container'>
				{navImages.map((item) => {
					return <ImageLink image={item} />;
				})}
			</div>
		</div>
	);
};

export default Home;
