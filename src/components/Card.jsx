import { Link } from 'react-router-dom'
import '../style/css/Card.css'

function Card({ title, picture }) {
	return (
		<Link className="card">
			<img src={picture} alt="Logement" />
			<p>{title}</p>
		</Link>
	)
}

export default Card
