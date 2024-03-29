import { Link } from 'react-router-dom'
import '../style/css/Card.css'

function Card({ title, picture, id }) {
	return (
		<Link to={`logements/${id}`} className="card">
			<img src={picture} alt="Logement" />
			<div className="filter"></div>
			<p>{title}</p>
		</Link>
	)
}

export default Card
