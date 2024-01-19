import { useParams } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import dataAll from '../assets/logements.json'
import '../style/css/Logements.css'
import StarRating from '../components/StarRating'
import Collapse from '../components/Collapse'

function Logements() {
	const { id } = useParams()
	const data = dataAll.filter((element) => element.id === id)[0]

	console.log(data)
	return (
		<div className="Logements">
			<Slideshow pictures={data.pictures} />
			<div>
				<div className="top-div">
					<div className="title-container">
						<h1>{data.title}</h1>
						<p>{data.location}</p>
					</div>
					<div className="host">
						<div>
							<p>{data.host.name.split(' ')[0]}</p>
							<p>{data.host.name.split(' ')[1]}</p>
						</div>
						<img src={data.host.picture} alt="host portrait" />
					</div>
				</div>
				<div className="bottom-div">
					<div className="tag-container">
						{data.tags.map((tag) => (
							<div>{tag}</div>
						))}
					</div>

					<div>
						<StarRating rating={data.rating} />
					</div>
				</div>
			</div>
			<div className="collapse-container">
				<Collapse id={0} title="Description" content="test" />
				<Collapse id={1} title="Description" content="test" />
			</div>
		</div>
	)
}

export default Logements
