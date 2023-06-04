import React from 'react'
import { BiBriefcase, BiFolder, BiMap } from 'react-icons/bi'
import image from '../../../assets/images/travel.png'
const Explore = () => {
	return (
		<div className='lg:flex justify-between items-center w-11/12 mx-auto gap-5 lg:mt-0 mt-10'>
			<div className='lg:w-1/2 w-full lg:mb-0 mb-5 text-center lg:text-left'>
				<h3 className='text-2xl font-bold text-primary'>Get To Know Us</h3>
				<h2 className='text-black font-extrabold lg:text-5xl md:text-3xl text-2xl leading-normal'>
					Explore All Tour Of The World With Us.
				</h2>
				<p className='my-5'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum.
				</p>
				<div className='grid lg:grid-cols-3 grid-cols-2 items-center gap-1 mt-5'>
					<p className='flex items-center gap-1'>
						<BiMap className='text-primary text-2xl' />
						<span>Tour Guide</span>
					</p>

					<p className='flex items-center gap-1'>
						<BiBriefcase className='text-primary text-2xl' />
						<span>Friendly Price</span>
					</p>

					<p className='flex items-center gap-1'>
						<BiFolder className='text-primary text-2xl' />
						<span>Reliable Tour Package</span>
					</p>
				</div>
			</div>
			<div className='lg:w-1/2 w-full'>
				<img src={image} alt='' />
			</div>
		</div>
	)
}

export default Explore
