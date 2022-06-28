import React from 'react';
import ImageLink from '../components/image-link.component';

const navImages = [
	{
		title: 'Taekwondo',
		imageURL: 'images/belt.svg',
		location: 'taekwondo',
		disabled: false,
	},
	{
		title: 'Trip Outreach',
		imageURL: 'images/gradCap.svg',
		location: 'afterschool',
		disabled: false,
	},
	{
		title: 'Behavioral Health',
		imageURL: 'images/heart.svg',
		location: 'behavioral',
		disabled: true,
	},
	{
		title: 'Foster Center',
		imageURL: 'images/home.svg',
		location: 'foster',
		disabled: true,
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
			<div className='home-container-bottom'>
				<div className='who-we-are'>
					<h2>Who we are</h2>
					<img src='' alt='' />
					<p>
						Our founder Robert Von Der Becke was as many of us are; looking to
						add meaning to life's struggles. While on his journey he discovered
						character traits that we all posses that can be strengthened in
						order to live life with far less conflict then we are typically
						exposed too. The challenging if not improbable task was teaching
						everyone how to harness those strengths. Eventually, through many
						tribulations the humble beginings that was a sweaty old martial arts
						school, was grown in to a comprehensive family of programs that can
						change every aspect of ones life, or just the aspects you deem
						appropriate.{' '}
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
				<div className='home-footer'>
					<div className='donate'>
						<h2>Contribute</h2>
						<img src='images/handshake.svg' alt='' />
						<p>
							We provided paypal for those of you who are comfortable
							contributing online. If you prefer you can mail checks to{' '}
							<span className='address'>
								Von Der Becke Academy Corp, PO BOX 772, Aurelia, IA. 51005
							</span>{' '}
							Please make all checks payable to Von Der Becke Academy Corp. If
							you wish to be recognized for your contribution please print and
							include the following form. THE FORM.
						</p>
						<form
							action='https://www.paypal.com/donate'
							method='post'
							target='_top'>
							<input
								type='hidden'
								name='hosted_button_id'
								value='4JZX9HEDNVYGJ'
							/>
							<input
								type='image'
								src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
								border='0'
								name='submit'
								title='PayPal - The safer, easier way to pay online!'
								alt='Donate with PayPal button'
							/>
							<img
								alt=''
								border='0'
								src='https://www.paypal.com/en_US/i/scr/pixel.gif'
								width='1'
								height='1'
							/>
						</form>
					</div>
					<div className='contact'>
						<h2>Contact us</h2>
						<p>
							<img src='images/phoneGreen.svg' alt='Phone number' />
							Phone (712)295-2103
						</p>
						<p>
							<img src='images/emailGreen.svg' alt='email' />
							Email admin@crossroadfc.com
						</p>
						<p>
							<img src='images/Facebook.svg' alt='Facebook' />
							Facebook @crossroadfc
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
