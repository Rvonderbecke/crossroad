import './App.scss';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

//my stuff
import Home from './routes/home.component';
import Header from './components/header.component';
import Afterschool from './routes/afterschool.component';
import Taekwondo from './routes/taekwondo.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path='/afterschool' element={<Afterschool />} />
        <Route path='/taekwondo' element={<Taekwondo />} />
			</Route>
		</Routes>
	);
}

export default App;
