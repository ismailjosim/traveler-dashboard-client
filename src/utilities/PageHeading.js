import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/images/bg1.jpg'
import img2 from '../assets/images/shape8.png'

const PageHeading = ({ headTitle }) => {
	return (
		<section
			className='py-28 bg-no-repeat bg-top bg-cover bg-fixed relative bg-transparent z-[1] text-center justify-center'
			style={ { backgroundImage: `url(${ img1 })` } }
		>
			<div
				className=' absolute -top-24 left-0 pb-40 pt-28 w-full h-20 top_inherit bottom-0 origin-center rotate-180 bg-contain bg-repeat-x z-[1]'
				style={ { backgroundImage: `url(${ img2 })` } }
			></div>
			<div className='bg-transparent relative z-[1] lg:pb-10 md:pb-5'>
				<div className='relative z-[1]'>
					<h1 className='mb-6 leading-3 uppercase text-white lg:text-6xl md:text-4xl text-3xl font-bold'>
						{ headTitle }
					</h1>
					<nav className='block'>
						<ul className='bg-transparent m-0 p-0 flex justify-center items-center gap-1 font-medium text-white'>
							<li>
								<Link className='text-primary' to='/'>
									Home
								</Link>
							</li>
							<span>|</span>
							<li className='capitalize'>{ headTitle }</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className='dot_overlay absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
		</section>
	)
}

export default PageHeading
