import React from 'react'
import img01 from '../../../assets/tour-guide/img1.jpg'
import img02 from '../../../assets/tour-guide/img2.jpg'
import img03 from '../../../assets/tour-guide/img3.jpg'
import img04 from '../../../assets/tour-guide/img4.jpg'
import '../../../styles/Custom.css'
import SectionHeading from '../../../utilities/SectionHeading'

const TourGuide = () => {
	const heading = {
		subHeading: 'Tour Guides',
		headingOne: 'Meet Our',
		headingTwo: 'Excellent Guides',
		describe:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}
	const teams = [
		{
			name: 'Horke Pels',
			post: 'Head Officer',
			pic: img01,
		},
		{
			name: 'Cacics Coold',
			post: 'Asst. Manager',
			pic: img02,
		},
		{
			name: 'Solden kalos',
			post: 'Senior Agent',
			pic: img03,
		},
		{
			name: 'Nelson Bam',
			post: 'Quality Assurance',
			pic: img04,
		},
	]

	return (
		<div className='w-11/12 mx-auto mb-20'>
			<SectionHeading heading={heading}></SectionHeading>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
				{teams.map((team, idx) => {
					const { name, post, pic } = team
					return (
						<div key={idx} className='transition-all duration-500 rounded-t-lg'>
							<div className='overflow-hidden transition-all duration-500 rounded-t-lg'>
								<img
									className='transition-all duration-500 hover:scale-110 w-screen'
									src={pic}
									alt='team'
								/>
							</div>
							<div className='relative z-[1] transition-all hover:-mt-4 duration-500 text-center p-3 bg-primary text-white rounded-b-lg cursor-pointer pt-5'>
								<h4 className='mb-0 text-2xl font-bold capitalize'>{name}</h4>
								<p className='mb-0'>{post}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default TourGuide
