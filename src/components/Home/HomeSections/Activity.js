import React from 'react'
import camping from '../../../assets/activity/camping-tent.png'
import cycling from '../../../assets/activity/cycling.png'
import hiking from '../../../assets/activity/hiking.png'
import safari from '../../../assets/activity/safari.png'
import beach from '../../../assets/activity/sunbed.png'
import surfing from '../../../assets/activity/surf.png'
import SectionHeading from '../../../utilities/SectionHeading'

const Activity = () => {
	const heading = {
		subHeading: 'TRAVEL BY ACTIVITY',
		headingOne: 'ADVENTURE &',
		headingTwo: 'ACTIVITY',
		describe:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}

	const data = [
		{
			id: 1,
			img: camping,
			title: 'camping',
		},
		{
			id: 2,
			img: cycling,
			title: 'cycling',
		},
		{
			id: 3,
			img: hiking,
			title: 'hiking',
		},
		{
			id: 4,
			img: safari,
			title: 'safari',
		},
		{
			id: 5,
			img: beach,
			title: 'Beach',
		},
		{
			id: 6,
			img: surfing,
			title: 'surfing',
		},
	]

	return (
		<div className='bg-slate-200 pb-10'>
			<div className='w-11/12 mx-auto my-10'>
				<SectionHeading heading={heading} />
				<div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10'>
					{data.map((activity) => (
						<div
							key={activity.id}
							className='bottom_animation px-10 py-5 rounded-md shadow-lg bg-white text-center flex flex-col justify-center items-center'
						>
							<img className='w-16' src={activity.img} alt={activity.title} />
							<h3 className=' lg:text-xl text-base font-bold capitalize mt-2'>
								{activity.title}
							</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Activity
