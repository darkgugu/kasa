import '../style/css/Banner.css'
import banner from '../assets/banner_image.png'

function Banner() {
	return (
		<div className="banner-container">
			<img src={banner} alt="banner" />
			<div></div>
			<p>Chez vous, partout et ailleurs</p>
		</div>
	)
}

export default Banner
