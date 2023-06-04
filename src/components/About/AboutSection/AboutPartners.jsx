import React from 'react'
import brand01 from '../../../assets/brand/aboutBrand/brand01.png'
import brand02 from '../../../assets/brand/aboutBrand/brand02.png'
import brand03 from '../../../assets/brand/aboutBrand/brand03.png'
import brand04 from '../../../assets/brand/aboutBrand/brand04.png'
import brand05 from '../../../assets/brand/aboutBrand/brand05.png'
import brand06 from '../../../assets/brand/aboutBrand/brand06.png'
import brand07 from '../../../assets/brand/aboutBrand/brand07.png'
import brand08 from '../../../assets/brand/aboutBrand/brand08.png'
import brand09 from '../../../assets/brand/aboutBrand/brand09.png'
import brand10 from '../../../assets/brand/aboutBrand/brand10.png'

const AboutPartners = () => {
	const brands = [
		brand01,
		brand02,
		brand03,
		brand04,
		brand05,
		brand06,
		brand07,
		brand08,
		brand09,
		brand10,
	]

	return (
		<div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 w-11/12 mx-auto mb-10'>
			{brands.map((brand, idx) => {
				return (
					<div
						className='border p-5 flex justify-center items-center'
						key={idx}
					>
						<img
							className='w-full max-w-[80px] saturate-0 hover:saturate-100 transition-all duration-500'
							src={brand}
							alt=''
						/>
					</div>
				)
			})}
		</div>
	)
}

export default AboutPartners
