import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'

function Header() {
	return (
		<nav>
			<img src={logo} alt="logo" />
			<Link to="/">Acceuil</Link>
			<Link to="/propos">A Propos</Link>
		</nav>
	)
}

export default Header
