import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//my stuff
import Home from './routes/home.component';
import Header from './components/header.component';
import Auth from './components/auth.component';
import Dashboard from './routes/dashboard.component';
import Afterschool from './routes/afterschool.component';
import Taekwondo from './routes/taekwondo.component';
import Admin from './routes/admin.component';
import Profile from './routes/profile.component';
import Thankyou from './routes/Thankyou';
import JustCanceled from './routes/justCanceled';
import RewardsCatalog from './routes/afterschoolRoutes/RewardsCatolog.js';
import Events from './routes/afterschoolRoutes/Events.js';
import TripDash from './routes/afterschoolRoutes/TripDash.js';
import Schedule from './routes/afterschoolRoutes/Schedule.js';
import AfterSchoolTkd from './routes/afterschoolRoutes/AfterSchoolTkd.js';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='user/dashboard' element={<Dashboard />} />
				<Route path='user/profile' element={<Profile />} />
				<Route path='/afterschool' element={<Afterschool />}>
					<Route path='reward-catalog' element={<RewardsCatalog />} />
					<Route path='events' element={<Events />} />
					<Route path='trip-dash' element={<TripDash />} />
					<Route path='schedule' element={<Schedule />} />
					<Route path='taekwondo' element={<AfterSchoolTkd />} />
				</Route>
				<Route path='/taekwondo' element={<Taekwondo />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/canceled' element={<JustCanceled />} />
				<Route path='/thankyou' element={<Thankyou />} />

			</Route>
		</Routes>
	);
}

export default App;
