import '../style/css/StarRating.css'
import redStar from '../assets/redStar.png'
import whiteStar from '../assets/whiteStar.png'

function StarRating({ rating }) {
	const starNumber = 5
	const starArray = []
	for (let i = 0; i < starNumber; i++) {
		i < rating
			? starArray.push(<img src={redStar} alt="filled star" />)
			: starArray.push(<img src={whiteStar} alt="empty star" />)
	}

	return <div className="StarRating">{starArray}</div>
}

export default StarRating
