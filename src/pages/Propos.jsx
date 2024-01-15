import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import '../style/css/Propos.css'

function Propos() {
	return (
		<div className="Propos">
			<Banner />
			<div>
				<Collapse id={0} />
				<Collapse id={1} />
			</div>
		</div>
	)
}

export default Propos
