import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../style/css/Header.css'

function Header() {
	const { pathname } = useLocation()

	if (pathname === '/') {
		//document.getElementById('accueil').className = 'underlined'
	} else {
		//document.getElementById('propos').className = 'underlined'
	}
	return (
		<nav>
			<img src={logo} alt="logo" />
			<div>
				<Link
					style={
						pathname === '/'
							? { textDecoration: 'underline' }
							: null
					}
					to="/"
				>
					Acceuil
				</Link>
				<Link
					style={
						pathname === '/propos'
							? { textDecoration: 'underline' }
							: null
					}
					to="/propos"
				>
					A Propos
				</Link>
			</div>
		</nav>
	)
}

export default Header
