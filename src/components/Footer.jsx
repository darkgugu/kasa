import logo from '../assets/footer_logo.png'
import '../style/css/Footer.css'

function Footer() {
	return (
		<footer>
			<img src={logo} alt="logo footer" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
