import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import img01 from '../../../assets/images/gallery (1).jpg'
import img02 from '../../../assets/images/gallery (2).jpg'
import img03 from '../../../assets/images/gallery (3).jpg'
import img04 from '../../../assets/images/gallery (4).jpg'
import img05 from '../../../assets/images/gallery (5).jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
	return (
		<div>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={3000}
			>
				<div data-src={img01}>1</div>
				<div data-src={img02}>1</div>
				<div data-src={img03}>1</div>
				<div data-src={img04}>1</div>
				<div data-src={img05}>1</div>
			</AutoplaySlider>
		</div>
	)
}

export default Slider
