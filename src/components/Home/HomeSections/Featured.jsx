import React from 'react'
import { BiCompass, BiDirections } from 'react-icons/bi'
import { BsFlag, BsGeoAltFill } from 'react-icons/bs'
import SectionHeading from '../../../utilities/SectionHeading'
import Card from './Card'

const featureData = [
	{
		id: 1,
		icon: <BsFlag />,
		title: 'Tell Us What You Want To Do',
		subtitle:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
		review: '100+ Reviews',
	},
	{
		id: 2,
		icon: <BsGeoAltFill />,
		title: 'Share Your Travel Locations',
		subtitle:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
		review: '100+ Reviews',
	},
	{
		id: 3,
		icon: <BiDirections />,
		title: 'Share Your Travel Preference',
		subtitle:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
		review: '100+ Reviews',
	},
	{
		id: 4,
		icon: <BiCompass />,
		title: 'Here 100% Trusted Tour Agency',
		subtitle:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
		review: '100+ Reviews',
	},
]

const Featured = () => {
	const heading = {
		subHeading: 'Core Features',
		headingOne: 'Find',
		headingTwo: 'Travel Perfection',
		describe:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}

	return (
		<div className='w-11/12 mx-auto my-10'>
			<SectionHeading heading={ heading } />
			<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
				{ featureData.map((data) => (
					<Card key={ data.id } data={ data }></Card>
				)) }
			</div>
		</div>
	)
}

export default Featured
