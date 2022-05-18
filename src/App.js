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

function App() {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Home />} />
				<Route path='/auth' element={<Auth />}/>
				<Route path='user/dashboard' element={<Dashboard />} />
				<Route path='user/profile' element={<Profile />} />
				<Route path='/afterschool' element={<Afterschool />} />
				<Route path='/taekwondo' element={<Taekwondo />} />
				<Route path='/admin' element={<Admin />} />
			</Route>
			
		</Routes>
	);
}

export default App;
