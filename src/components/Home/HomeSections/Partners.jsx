import React from 'react'
import brand01 from '../../../assets/brand/brand01.png'
import brand02 from '../../../assets/brand/brand02.png'
import brand03 from '../../../assets/brand/brand03.png'
import brand04 from '../../../assets/brand/brand04.png'
import brand05 from '../../../assets/brand/brand05.png'
import brand06 from '../../../assets/brand/brand07.png'
import SectionHeading from '../../../utilities/SectionHeading'

const Partners = () => {
	const heading = {
		subHeading: 'Our Partners',
		headingOne: 'Our Awesome',
		headingTwo: 'Partners',
		describe:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}
	const data = [
		{
			id: 1,
			img: brand01,
		},
		{
			id: 2,
			img: brand02,
		},
		{
			id: 3,
			img: brand03,
			title: 'hiking',
		},
		{
			id: 4,
			img: brand04,
		},
		{
			id: 5,
			img: brand05,
		},
		{
			id: 6,
			img: brand06,
		},
	]

	return (
		<div className='bg-white pb-10'>
			<div className='w-11/12 mx-auto my-10'>
				<SectionHeading heading={heading} />
				<div className='flex justify-center items-center gap-10 lg:gap-20'>
					{data.map((activity) => (
						<div key={activity.id}>
							<img className='w-24' src={activity.img} alt={activity.title} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Partners
