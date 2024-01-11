import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../style/css/Header.css'

function Header() {
	return (
		<nav>
			<img src={logo} alt="logo" />
			<div>
				<Link to="/">Acceuil</Link>
				<Link to="/propos">A Propos</Link>
			</div>
		</nav>
	)
}

export default Header
