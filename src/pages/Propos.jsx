import data from '../assets/collapseText.json'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import '../style/css/Propos.css'

function Propos() {
	return (
		<div className="Propos">
			<Banner />
			<div className="container">
				{data.map((data) => (
					<Collapse
						key={data.id}
						id={data.id}
						title={data.title}
						content={data.text}
					/>
				))}
			</div>
		</div>
	)
}

export default Propos
