import React from 'react'
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../assets/footer/site-logo.png'
import gallery01 from '../assets/images/gallery (1).jpg'
import gallery02 from '../assets/images/gallery (2).jpg'
import gallery03 from '../assets/images/gallery (3).jpg'
import gallery04 from '../assets/images/gallery (4).jpg'
import gallery05 from '../assets/images/gallery (5).jpg'
import gallery06 from '../assets/images/gallery (6).jpg'
const Footer = () => {
	const images = [
		gallery01,
		gallery02,
		gallery03,
		gallery04,
		gallery05,
		gallery06,
	]

	return (
		<footer className='bg-accent text-white'>
			<div className='footer pt-20 w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
				<div>
					<img src={logo} alt='' />
					<p className='text-base text-justify lg:w-5/6'>
						Urna ratione ante harum provident, eleifend, vulputate molestiae
						proin fringilla, praesentium magna conubia at perferendis, pretium,
						aenean aut ultrices.
					</p>
				</div>
				<div className='text-base'>
					<span className='footer-title'>Quick Link</span>
					<button className='link link-hover'>About Us</button>
					<button className='link link-hover'>Delivery Information</button>
					<button className='link link-hover'>Privacy Policy</button>
					<button className='link link-hover'>Terms & Conditions</button>
					<button className='link link-hover'>Customer Service</button>
					<button className='link link-hover'>Return Policy</button>
				</div>
				<div className='text-base'>
					<span className='footer-title'>CONTACT US</span>
					<p>Feel free to contact and reach us !!</p>
					<button className='link link-hover flex items-center gap-3'>
						<BsFillTelephoneFill />
						<a href='tel:+01988256203'>+01(988) 256 203</a>
					</button>
					<button className='link link-hover flex items-center gap-3'>
						<BsEnvelopeFill />
						<a href='tel:+01988256203'>contact@traveler.com</a>
					</button>
					<button className='link link-hover flex items-center gap-3'>
						<FaMapMarkerAlt />
						<a href='tel:+01988256203'>3146 Koontz, California</a>
					</button>
				</div>
				<div className=''>
					<span className='footer-title'>GALLERY</span>
					<div className='grid grid-cols-3 gap-2 rounded-lg'>
						{images.map((item, index) => (
							<img
								key={index}
								src={item}
								alt=''
								className='w-20 h-20 rounded-lg'
							/>
						))}
					</div>
				</div>
			</div>
			<p className='text-base text-center pb-10 pt-10'>
				Copyright 2022 All Rights Reserved
			</p>
		</footer>
	)
}

export default Footer
