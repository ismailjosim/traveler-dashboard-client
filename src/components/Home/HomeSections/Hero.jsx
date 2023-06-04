import React, { useRef } from 'react'
import slideImg01 from '../../../assets/homepage/slide01.jpg'
import slideImg02 from '../../../assets/homepage/slide02.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleSlide from './SingleSlide';
import '../../../styles/Custom.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";

const slides = [
	{
		picture: slideImg01,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
	{
		picture: slideImg02,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
	{
		picture: slideImg01,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
	{
		picture: slideImg02,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
]

const Hero = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${ Math.ceil(time / 1000) }s`;
	};


	return (
		<Swiper
			speed={ 1000 }
			spaceBetween={ 50 }
			centeredSlides={ true }
			autoplay={ {
				delay: 10000,
				disableOnInteraction: false,
			} }
			loop={ true }
			pagination={ { clickable: true } }
			navigation={ true }
			modules={ [Autoplay, Pagination, EffectCreative, Navigation] }
			onAutoplayTimeLeft={ onAutoplayTimeLeft }
			grabCursor={ true }
			effect={ "creative" }
			creativeEffect={ {
				prev: {
					shadow: true,
					translate: [0, 0, -400],
				},
				next: {
					translate: ["100%", 0, 0],
				},
			} }
		>
			{
				slides.map((slide, idx) => {
					return <SwiperSlide key={ idx }>
						<SingleSlide slide={ slide }></SingleSlide>
					</SwiperSlide>
				})
			}
			<div className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-primary" slot="container-end">
				<svg
					className='absolute left-0 bottom-11 z-10 w-full h-full stroke-primary fill-none transform -rotate-90 stroke_custom'
					viewBox="0 0 48 48" ref={ progressCircle }>
					<circle cx="24" cy="24" r="20"></circle>
				</svg>
				<span className='text-primary absolute bottom-14' ref={ progressContent }></span>
			</div>
		</Swiper>
	)
}

export default Hero;
