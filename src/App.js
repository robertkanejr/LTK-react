import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import ToDo from './pages/ToDo'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="contact" element={<Contact />} />
				<Route path="profile" element={<Profile />} />
				<Route path="todo" element={<ToDo />} />
			</Route>
		</Routes>
	)
}

export default App
