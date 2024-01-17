import { useParams } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import dataAll from '../assets/logements.json'
import '../style/css/Logements.css'

function Logements() {
	const { id } = useParams()
	const data = dataAll.filter((element) => element.id === id)[0]

	console.log(data)
	return (
		<div className="Logements">
			<Slideshow pictures={data.pictures} />
			{id}
		</div>
	)
}

export default Logements
