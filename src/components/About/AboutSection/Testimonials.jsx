import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Slider from 'react-slick'
import testBg from '../../../assets/images/travel2.png'
import SectionHeading from './../../../utilities/SectionHeading'
const Testimonials = () => {
	const heading = {
		subHeading: 'Our Testimonails',
		headingOne: 'Good Reviews By ',
		headingTwo: 'Clients',
		describe:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}
	const contents = [
		{
			name: 'person',
			post: 'occupation',
			details:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
		},
		{
			name: 'person',
			post: 'occupation',
			details:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
		},
		{
			name: 'person',
			post: 'occupation',
			details:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
		},
		{
			name: 'person',
			post: 'occupation',
			details:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
		},
		{
			name: 'person',
			post: 'occupation',
			details:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
		},
		{
			name: 'person',
			post: 'occupation',
			details:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
		},
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div className='testimonial'>
			<SectionHeading heading={ heading } />
			<div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 items-center mb-20 w-11/12 mx-auto'>
				<div>
					<img src={ testBg } alt='' />
				</div>
				<div className='w-11/12 mx-auto'>
					<Slider { ...settings }>
						{ contents.map((content, idx) => {
							const { name, post, details } = content
							return (
								<div key={ idx } className=''>
									<div className='flex items-center gap-5'>
										<div className='avatar'>
											<div className='w-20 rounded-full'>
												<img src='https://placeimg.com/192/192/people' alt='' />
											</div>
										</div>
										<div>
											<h3 className='text-2xl font-semibold uppercase text-primary'>
												{ name }
											</h3>
											<p>{ post }</p>
										</div>
									</div>
									<div className='text-lg mt-5'>
										<FaQuoteLeft className='text-6xl text-primary inline' />
										<span className='italic text-neutral'> { details }</span>
									</div>
								</div>
							)
						}) }
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
