import '../style/css/Collapse.css'
import chevron from '../assets/chevron.png'
import { useState } from 'react'

function Collapse({ id, title, content }) {
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
				{title}
				<img
					src={chevron}
					alt=""
					onClick={() => {
						clickChevron(!isOpen)
					}}
					id={`chevron${id}`}
				/>
			</div>
			<div id={`content${id}`} className="content">
				<p>{content}</p>
			</div>
		</div>
	)
}

export default Collapse
