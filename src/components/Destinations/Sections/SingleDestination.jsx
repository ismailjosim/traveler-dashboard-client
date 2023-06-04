import React from 'react'
import { BiMap } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GoCheck } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'

import imgDetails from '../../../assets/destinations/trending-large.jpg'
import Button from '../../../utilities/Button'
import PageHeading from '../../../utilities/PageHeading'
import { useParams } from 'react-router-dom'
import { useGetDestinationQuery } from '../../../redux/features/api/apiSlice'

const SingleDestination = () => {
	const { id } = useParams();
	const data = useGetDestinationQuery(id);
	console.log(data);
	const { name, location, rating, picture, details, packageIncludes, returnPolicy, gallery } = data || {};


	return (
		<div>
			<PageHeading headTitle={ name } />
			<div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 mt-5'>
				{/*section: Destination Title */ }
				<div className='col-span-2'>
					<h2 className='text-5xl capitalize font-semibold'>
						{ name }
					</h2>
					<div className='flex gap-2 items-center mt-3 mb-5 text-accent'>
						<BiMap className='inline-block text-base' />
						<span className='text-base'>{ location }</span>
						<p className='flex gap-1 text-secondary text-xl'>
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
						</p>
						<span>({ rating } Reviews)</span>
					</div>

					{/*section: Destination Image */ }
					<div className='w-full rounded-lg overflow-hidden'>
						<img className='w-full' src={ picture } alt='' />
					</div>

					{/*section: Destination Description */ }
					<div className='my-5'>
						<h4 className='text-xl font-semibold my-5'>Description</h4>
						<p className=''>
							{ details.slice(0, 200) }
						</p>
						<p className='my-5'>
							{ details.slice(200) }
						</p>

						<div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
							{/*section: Price Includes */ }
							<div className='bg-slate-100 rounded-xl p-5'>
								<h4 className='text-xl font-medium mb-4'>Price Includes</h4>
								<ul className='flex flex-col gap-2'>
									{
										packageIncludes.map((item, idx) => {
											return <li key={ idx } className='flex items-center gap-1'>
												<GoCheck className='text-xl' />
												<span>{ item }</span>
											</li>
										})
									}
								</ul>
							</div>

							{/*section: Departure details */ }
							<div className='bg-slate-100 rounded-xl p-5'>
								<h4 className='text-xl font-medium mb-4'>
									Departure & Return Location
								</h4>
								<ul className='flex flex-col gap-2'>
									{
										returnPolicy.map((item, idx) => {
											return <li key={ idx } className='flex items-center gap-1'>
												<RxCross2 className='text-xl' />
												<span>{ item }</span>
											</li>
										})
									}

								</ul>
							</div>
						</div>
					</div>

					{/*section: Gallery images */ }
					<h4 className='text-2xl font-bold my-4'>Gallery</h4>
					<div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
						{
							gallery.map((item, idx) => {
								return <div key={ idx } className='w-full h-[250px] shadow-md rounded-lg overflow-hidden'>
									<img src={ item } alt='' />
								</div>
							})
						}

					</div>
					{/*section: Map locations details */ }
					<h4 className='text-2xl font-medium my-4'>Map</h4>
					<div className='my-10'>Map goes here</div>

					{/* Review details */ }
					<h4 className='text-2xl font-medium my-4'>Average Reviews</h4>
					<div className='my-10 bg-accent text-white px-5 py-10 text-center rounded-lg text-2xl'>
						<h3>2.2/5</h3>
						<h4 className='my-2 font-semibold'>
							"Feel So Much Worst Than Thinking"
						</h4>
						<p className='text-base'>From 40 Reviews</p>
					</div>
					<div className='flex flex-col gap-2 mb-5'>
						<div>
							<span>Cleanliness</span>
							<progress
								className='progress progress-primary w-full h-4'
								value='4'
								max='5'
							></progress>
						</div>
						<div>
							<span>Facilities</span>
							<progress
								className='progress progress-primary w-full h-4'
								value='3'
								max='5'
							></progress>
						</div>
						<div>
							<span>Value for money</span>
							<progress
								className='progress progress-primary w-full h-4'
								value='5'
								max='5'
							></progress>
						</div>
						<div>
							<span>Service</span>
							<progress
								className='progress progress-primary w-full h-4'
								value='2'
								max='5'
							></progress>
						</div>
						<div>
							<span>Location</span>
							<progress
								className='progress progress-primary w-full h-4'
								value='3'
								max='4'
							></progress>
						</div>
					</div>


					{/* Review form section details */ }
					<div className='mb-10'>
						<h4 className='text-2xl font-medium my-4'>Write A Review</h4>
						<form className='flex flex-col gap-5'>
							<div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
								<input
									type='text'
									placeholder='Name'
									className='input input-bordered border-neutral text-primary input-primary w-full focus:outline-none focus:border-primary'
								/>
								<input
									type='email'
									placeholder='email'
									className='input input-bordered border-neutral text-primary input-primary w-full focus:outline-none focus:border-primary'
								/>
							</div>
							<textarea
								className='textarea textarea-primary focus:outline-none focus:border-primary w-full h-20 border-neutral resize-none'
								placeholder='Write Your Comment'
							></textarea>
							<div>
								<Button btnText='Submit Review' destination='/single' />
							</div>
						</form>
					</div>
				</div>

				{/* Header: Right side  content */ }
				<div className='col-span-1 w-full mb-10'>
					{/* section:  content section */ }
					<div className='card shadow-md rounded-lg'>
						<figure className='py-5'>
							<img
								src={ imgDetails }
								alt='Shoes'
								className='rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2'
							/>
						</figure>
						<div className='card-body items-center text-center'>
							<h2 className='card-title'>Relson Dulux</h2>
							<p>
								Hello, We’re content writer who is fascinated by content
								fashion, celebrity and lifestyle. We helps clients bring the
								right content to the right people.
							</p>
							<div className='card-actions mt-5 gap-5'>
								<span className='bg-primary p-2 rounded-lg hover:bg-secondary transition-all duration-500 ease-in-out'>
									<FaFacebookF className='text-white text-xl' />
								</span>
								<span className='bg-primary p-2 rounded-lg hover:bg-secondary transition-all duration-500 ease-in-out'>
									<FaGooglePlusG className='text-white text-xl' />
								</span>
								<span className='bg-primary p-2 rounded-lg hover:bg-secondary transition-all duration-500 ease-in-out'>
									<FaTwitter className='text-white text-xl' />
								</span>
								<span className='bg-primary p-2 rounded-lg hover:bg-secondary transition-all duration-500 ease-in-out'>
									<FaInstagram className='text-white text-xl' />
								</span>
							</div>
						</div>
					</div>

					{/* section: All Categories */ }
					<div className='my-5'>
						<h4 className='text-2xl font-medium my-4'>All Categories</h4>
						<ul className='flex flex-col gap-5'>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Traveling
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Tour Position
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Trip Landmark
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Adventurous
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Address and Map
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Booking Requests
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Booking Requests
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Wildlife Reservation
							</li>
							<li className='hover:bg-primary hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer'>
								Top Destination
							</li>
						</ul>
					</div>

					{/* section: Tags */ }
					<div className='my-5'>
						<h4 className='text-2xl font-medium my-4'>Tags</h4>
						<ul className='text-sm font-medium'>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Tour
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Rental
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								City
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Batch
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Activity
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Museum
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Beauty
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Classic
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Creative
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Designs
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Featured
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Free Style
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Programs
							</span>
							<span className='hover:bg-primary inline-block hover:text-white rounded-md p-3 border hover:border-primary transition-all duration-500 ease-in-out cursor-pointer mr-2 mb-2'>
								Travel
							</span>
						</ul>
					</div>
					{/* section: Featured Image: this will be another post */ }
					<div className='w-full rounded-lg overflow-hidden'>
						<img src={ imgDetails } alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleDestination
