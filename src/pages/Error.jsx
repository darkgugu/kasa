import { Link } from 'react-router-dom'
import '../style/css/Error.css'

function Error() {
	return (
		<div className="Error">
			<div>404</div>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/">Retourner sur la page d'accueil</Link>
		</div>
	)
}

export default Error
