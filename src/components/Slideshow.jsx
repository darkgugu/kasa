import React, { useState } from 'react'
import '../style/css/Slideshow.css'
import arrowRight from '../assets/arrow_forward.png'
import arrowLeft from '../assets/arrow_back.png'

function Slideshow({ pictures }) {
	const [currentImage, setCurrentImage] = useState(0)

	function changeImage(direction) {
		direction === 'left'
			? currentImage !== 0
				? setCurrentImage(currentImage - 1)
				: setCurrentImage(pictures.length - 1)
			: currentImage !== pictures.length - 1
				? setCurrentImage(currentImage + 1)
				: setCurrentImage(0)
	}

	return (
		<div className="Slideshow">
			{pictures.map((image, index) =>
				index === currentImage ? (
					<div key={index} className="container">
						<img src={image} alt="" className="image" />
						{pictures.length !== 1 ? (
							<React.Fragment>
								<img
									src={arrowLeft}
									alt=""
									onClick={() => changeImage('left')}
									className="arrows"
									id="arrow-left"
								/>
								<img
									src={arrowRight}
									alt=""
									onClick={() => changeImage('right')}
									className="arrows"
									id="arrow-right"
								/>
								<p>
									{currentImage + 1}/{pictures.length}
								</p>
							</React.Fragment>
						) : null}
					</div>
				) : null,
			)}
		</div>
	)
}

export default Slideshow
