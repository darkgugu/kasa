import '../style/css/Collapse.css'
import chevron from '../assets/chevron.png'
import { useState } from 'react'

function Collapse({ id }) {
	const [isOpen, setIsOpen] = useState(false)

	function clickChevron(state) {
		const chevronElement = document.getElementById(`chevron${id}`)
		const contentElement = document.getElementById(`content${id}`)
		if (state) {
			chevronElement.className = 'anim'
			contentElement.className = 'content anim-container'
		} else {
			chevronElement.className = ''
			contentElement.className = 'content'
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
					id={`chevron${id}`}
				/>
			</div>
			{true ? (
				<div id={`content${id}`} className="content">
					<p>
						Les annonces postées sur Kasa garantissent une fiabilité
						totale. Les photos sont conformes aux logements, et
						toutes les informations sont régulièrement vérifiées par
						nos équipes
					</p>
				</div>
			) : null}
		</div>
	)
}

export default Collapse
