import React from 'react'
import SectionHeading from '../../../utilities/SectionHeading'
import img01 from '../../../assets/images/gallery (1).jpg';
import img02 from '../../../assets/images/gallery (2).jpg';
import img03 from '../../../assets/images/gallery (3).jpg';

const Gallery = () => {
	const heading = {
		subHeading: 'Photo Gallery',
		headingOne: "Photo's From",
		headingTwo: 'Travelers',
		describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}

	return (
		<section className='mt-10'>
			<SectionHeading heading={ heading } />
			<div className="overflow-hidden w-11/12 mx-auto ">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
					<div>
						<div className='mb-5'>
							<img className='block object-cover object-center w-full h-full rounded-lg' src={ img01 } alt="" />
						</div>
						<div className='w-full lg:grid flex flex-col grid-cols-2 gap-5'>
							<img className='block object-cover object-center max-w-full h-full rounded-lg' src={ img02 } alt="" />
							<img className='block object-cover object-center w-full h-full rounded-lg' src={ img03 } alt="" />
						</div>
					</div>
					<div>
						<div className='grid grid-cols-2 gap-5 mb-5'>
							<img className='block object-cover object-center w-full h-full rounded-lg' src={ img02 } alt="" />
							<img className='block object-cover object-center w-full h-full rounded-lg' src={ img03 } alt="" />
						</div>
						<div>
							<img className='block object-cover object-center w-full h-full rounded-lg' src={ img01 } alt="" />
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Gallery
