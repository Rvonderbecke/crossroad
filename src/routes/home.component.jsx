import React from 'react';
import ImageLink from '../components/image-link.component';

const navImages = [
	{
		title: 'Taekwondo',
		imageURL: 'images/belt.svg',
		location: 'taekwondo',
		disabled: false
	},
	{
		title: 'Trip Outreach',
		imageURL: 'images/gradCap.svg',
		location: 'afterschool',
		disabled: false

	},
	{
		title: 'Behavioral Health',
		imageURL: 'images/heart.svg',
		location: 'behavioral',
		disabled: true

	},
	{
		title: 'Foster Center',
		imageURL: 'images/home.svg',
		location: 'foster',
		disabled: true

	},
];

const Home = () => {
	return (
		<>
			<div className='home-header'>
				<h1>Programs</h1>
				<p>
					Each on of our projects serves a different purpose, all of our
					projects are designed to make living a better experience for everyone
					we serve.
				</p>
			</div>
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
			<div className="home-container-bottom">
				<div className='who-we-are'>
					<h2>Who we are</h2>
					<img src='' alt='' />
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<div className='what-we-do'>
					<h2>What we do</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<img src='' alt='' />
				</div>
				<div className="home-footer">
					<div className="donate">
						<h2>Donate</h2>
						<img src="" alt="" />
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
						<button>Donate</button>
					</div>
					<div className="contact">
						<h2>Contact us</h2>
						<p><span></span>Phone 7122952103</p>
						<p><span></span>Email admin@crossroadfc.com</p>
						<p><span></span>Facebook @crossroadfc</p>
						<p><span></span>Phone 7122952103</p>
						<p><span></span>Phone 7122952103</p>
					</div>
				</div>
				</div>
		</>
	);
};

export default Home;
