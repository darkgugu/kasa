import '../style/css/Collapse.css'
import chevron from '../assets/chevron.png'
import { useState } from 'react'

function Collapse() {
	const [isOpen, setIsOpen] = useState(false)

	function clickChevron(state) {
		const chevronElement = document.getElementById('chevron')
		if (state) {
			chevronElement.className = 'anim'
		} else {
			chevronElement.className = ''
		}
		setIsOpen(state)
	}

	return (
		<div className="Collapse">
			<div className="title">
				Titre du collapse
				<img
					src={chevron}
					alt=""
					onClick={() => {
						clickChevron(!isOpen)
					}}
					id="chevron"
				/>
			</div>
			{isOpen ? (
				<div className="content">
					Les annonces postées sur Kasa garantissent une fiabilité
					totale. Les photos sont conformes aux logements, et toutes
					les informations sont régulièrement vérifiées par nos
					équipes
				</div>
			) : null}
		</div>
	)
}

export default Collapse
