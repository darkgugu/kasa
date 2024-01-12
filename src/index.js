import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logements from './pages/Logements'
import Propos from './pages/Propos'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/logements" element={<Logements />}></Route>
				<Route path="/propos" element={<Propos></Propos>}></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
)
