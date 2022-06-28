import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import InfoBoxWithPicture from '../components/InfoBoxWithPicture';
import SideBar from '../components/SideBar';

const Afterschool = () => {
	const [viewOutletContent, setOutletContent] = useState(true);
	const nav = useNavigate();

	const handleContentSwitch = (e) => {
		const des = e.target.name;
		switch (des) {
			case 'reward-catalog':
				nav(des);
				if (viewOutletContent) {
					setOutletContent(!viewOutletContent);
				}
				break;
			case 'event':
				nav('events');
				if (viewOutletContent) {
					setOutletContent(!viewOutletContent);
				}
				break;
			case 'dash':
				nav('trip-dash');
				if (viewOutletContent) {
					setOutletContent(!viewOutletContent);
				}
				break;
			case 'sch':
				nav('schedule');
				if (viewOutletContent) {
					setOutletContent(!viewOutletContent);
				}
				break;
			case 'tkd':
				nav('taekwondo');
				if (viewOutletContent) {
					setOutletContent(!viewOutletContent);
				}
				break;
			default:
				break;
		}
	};
	const menuArray = [
		{
			labelText: 'Trip Catalog',
			className: 'trip',
			htmlFor: 'reward-catalog',
			name: 'reward-catalog',
			onClick: handleContentSwitch,
		},
		{
			labelText: 'Events',
			className: 'event',
			htmlFor: 'event',
			name: 'event',
			onClick: handleContentSwitch,
		},
		{
			labelText: 'Dashboard',
			className: 'dash',
			htmlFor: 'dash',
			name: 'dash',
			onClick: handleContentSwitch,

		},
		{
			labelText: 'Class Schedule',
			className: 'sch',
			htmlFor: 'sch',
			name: 'sch',
			onClick: handleContentSwitch,

		},
		{
			labelText: 'Taekwondo',
			className: 'tkd',
			htmlFor: 'tkd',
			name: 'tkd',
			onClick: handleContentSwitch,

		},
	];
	const infoBoxArray = [
		{
			bigImgSrc: 'images/taekwondo.jpg',
			littleImgSrc: 'images/tkd.svg',
			headingText: 'Learn Taekwondo',
			paragraphText: 'Taekwondo is a part of the TRIP program. The kids will learn the basic fundamentals and get some exercise.'
		},
		{
			bigImgSrc: 'images/fun.jpg',
			littleImgSrc: 'images/fun.svg',
			headingText: 'Have Fun',
			paragraphText: 'Having fun is an important part of the TRIP Outreach program. You are only a kid once so we make sure there is plenty of time to play games.'
		},
		{
			bigImgSrc: 'images/explore.jpg',
			littleImgSrc: 'images/compass.svg',
			headingText: 'Go Exploring',
			paragraphText: 'Go on fun field trips to places like nature hikes to Adventureland.  Kids can earn trips as well points for their volunteer work and maintaining good grades in school.'
		},
		{
			bigImgSrc: 'images/giveBack.jpg',
			littleImgSrc: 'images/handshake.svg',
			headingText: 'Give Back',
			paragraphText: 'Giving back is a big part of what TRIP Outreach is all about. Not only does it bring the community together and help individuals that need it, it also teaches the kids to value others as well as themselves.'
		},
	];
	return (
		<>
			<div className='afterschool-container'>
				<SideBar menuArray={menuArray} />
				<div className='main-content'>
					{viewOutletContent ? (
						<>
							<h2>What is T.R.I.P Outreach?</h2>
							<p>
								Trip Outreach was introduced in 2004 as a program to teach
								responsibility and promote community engagement. From that day
								it has evolved into a program that does its intended purpose and
								so much more. From students’ ability to earn rewards that can
								cover school expenses to utility bills for your home TRIP
								rewards help the entire family succeed. In addition to the
								benefits of the rewards, TRIP students will be introduced to the
								principles that guide a martial art master’s way of life,
								learning to put confidence at the forefront of their choices and
								use knowledge and understanding rather than impulsive decisions
								in a time of stress. The Benefits of the individual are apparent
								and integrated into every event we host. What may not always be
								evident is the tremendous benefit the program brings to the
								community served. In short, as we one by one help build the
								characters of our student body, those traits are shared with
								members of the community. In short, we are guiding the community
								through its members and uniting a society under common goals.
								Healthy bodies, minds, and souls. United, productive, and
								progressive societies.
							</p>
							{infoBoxArray.map((item) => (
								<InfoBoxWithPicture item={item}/>
							))}
						</>
					) : (
						<Outlet />
					)}
				</div>
			</div>
		</>
	);
};

export default Afterschool;
