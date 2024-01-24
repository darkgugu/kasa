import '../style/css/Banner.css'
import homeBanner from '../assets/banner_image.png'
import proposBanner from '../assets/banner_image2.png'

function Banner({ isHome }) {
	return (
		<div className="banner-container">
			<img src={isHome ? homeBanner : proposBanner} alt="banner" />
			{isHome ? <p>Chez vous, partout et ailleurs</p> : null}
		</div>
	)
}

export default Banner
