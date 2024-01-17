import Banner from '../components/Banner'
import Card from '../components/Card'
import '../style/css/Home.css'
import data from '../assets/logements.json'

function Home() {
	return (
		<div className="Home">
			<Banner isHome={true} />
			<div className="card-container">
				{data.map((logement) => (
					<Card
						key={logement.id}
						id={logement.id}
						title={logement.title}
						picture={logement.cover}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
