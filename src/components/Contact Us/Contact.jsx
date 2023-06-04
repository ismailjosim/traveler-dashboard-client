import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import PageHeading from './../../utilities/PageHeading'

const Contact = () => {
	const cardData = [
		{
			icon: <FaMapMarkerAlt />,
			title: 'Office Location',
			details1: '445 Mount Eden Road, Mt Eden Basundhara Chakrapath',
			details2: '',
		},
		{
			icon: <BsFillTelephoneFill />,
			title: 'Phone Number',
			details1: '977-444-222-000',
			details2: '977-444-222-000',
		},
		{
			icon: <FaEnvelope />,
			title: 'Email Address',
			details1: 'contact@traveler.com',
			details2: 'info@traveler.com',
		},
	]

	return (
		<div>
			<PageHeading headTitle={ 'contact us' }></PageHeading>
			<div className='text-center mb-5'>
				<h2 className='text-3xl font-bold'>INFORMATION ABOUT US</h2>
				<p className='text-base font-medium text-neutral'>
					Sagittis posuere id nam quis vestibulum vestibulum a facilisi at elit
					hendrerit scelerisque sodales nam dis orci.
				</p>
			</div>
			<div className='w-11/12 mx-auto mb-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center text-center'>
				{ cardData.map((data, idx) => {
					return (
						<div
							key={ idx }
							className='rounded-xl border p-0.5 flex justify-center items-center'
						>
							<div className='rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-center items-center'>
								<div className='mt-0.5 text-5xl text-primary'>{ data.icon }</div>
								<div className='mt-5'>
									<h3 className='text-3xl font-semibold mb-5'>{ data.title }</h3>
									<p className='text-lg font-medium text-neutral  lg:w-3/4 w-full mx-auto'>
										{ data.details1 }
									</p>
									<p className='text-lg font-medium text-neutral lg:w-3/4 w-full mx-auto'>
										{ data.details2 }
									</p>
								</div>
							</div>
						</div>
					)
				}) }
			</div>
			<div>
				<section className='pb-10 w-11/12 mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
						<div>
							<div>
								<iframe
									className='w-full'
									title='myFrame'
									height={ 500 }
									src='https://maps.google.com/maps?q=Bhola,%20barishal,%20bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed'
									frameBorder='0'
								></iframe>
							</div>
						</div>
						<form className='flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid'>
							<div>
								<input
									type='text'
									placeholder='First Name'
									className='rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full'
								/>
							</div>
							<div>
								<input
									type='text'
									placeholder='Last Name'
									className='rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full'
								/>
							</div>
							<div>
								<input
									type='email'
									placeholder='Email'
									className='rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full'
								/>
							</div>
							<div>
								<input
									type='number'
									placeholder='Phone'
									className='rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full'
								/>
							</div>
							<div>
								<textarea
									className='textarea textarea-success w-full text-base'
									rows='4'
									placeholder='Enter your message...'
								></textarea>
							</div>
							<div className='flex justify-center'>
								<button
									type='button'
									className='btn btn-primary inline-block text-white capitalize px-5 py-2'
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Contact
