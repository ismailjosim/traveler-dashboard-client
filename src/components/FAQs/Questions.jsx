import React from 'react'
import SectionHeading from '../../utilities/SectionHeading'

const Questions = () => {
	const heading = {
		subHeading: 'Faq',
		headingOne: 'Frequent Asked',
		headingTwo: 'Questions',
		describe:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}
	return (
		<div>
			<SectionHeading heading={heading} />
			<div className='w-11/12 mx-auto mb-10'>
				<div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10'>
					<div className=''>
						<details
							className='group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden mb-5 shadow-xl rounded-xl'
							open
						>
							<summary className='flex items-center justify-between cursor-pointer'>
								<h2 className='text-xl font-bold text-gray-900'>Who We Are?</h2>
								<span className='ml-1.5 flex-shrink-0 rounded-full bg-primary p-1.5 text-white sm:p-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>
							<p className='mt-4 leading-relaxed text-gray-700'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
								veritatis molestias culpa in, recusandae laboriosam neque
								aliquid libero nesciunt voluptate dicta quo officiis explicabo
								consequuntur distinctio corporis earum similique!
							</p>
						</details>
						<details className='group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden mb-5 shadow-xl rounded-xl'>
							<summary className='flex items-center justify-between cursor-pointer'>
								<h2 className='text-xl font-bold text-gray-900'>
									Wanna Know Our Special Features?
								</h2>
								<span className='ml-1.5 flex-shrink-0 rounded-full bg-primary p-1.5 text-white sm:p-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>
							<p className='mt-4 leading-relaxed text-gray-700'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
								veritatis molestias culpa in, recusandae laboriosam neque
								aliquid libero nesciunt voluptate dicta quo officiis explicabo
								consequuntur distinctio corporis earum similique!
							</p>
						</details>
						<details className='group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden mb-5 shadow-xl rounded-xl'>
							<summary className='flex items-center justify-between cursor-pointer'>
								<h2 className='text-xl font-bold text-gray-900'>
									Check Your Status
								</h2>
								<span className='ml-1.5 flex-shrink-0 rounded-full bg-primary p-1.5 text-white sm:p-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>
							<p className='mt-4 leading-relaxed text-gray-700'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
								veritatis molestias culpa in, recusandae laboriosam neque
								aliquid libero nesciunt voluptate dicta quo officiis explicabo
								consequuntur distinctio corporis earum similique!
							</p>
						</details>
					</div>
					<div>
						<details className='group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden mb-5 shadow-xl rounded-xl'>
							<summary className='flex items-center justify-between cursor-pointer'>
								<h2 className='text-xl font-bold text-gray-900'>
									Why Choose Us?
								</h2>
								<span className='ml-1.5 flex-shrink-0 rounded-full bg-primary p-1.5 text-white sm:p-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>
							<p className='mt-4 leading-relaxed text-gray-700'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
								veritatis molestias culpa in, recusandae laboriosam neque
								aliquid libero nesciunt voluptate dicta quo officiis explicabo
								consequuntur distinctio corporis earum similique!
							</p>
						</details>
						<details className='group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden mb-5 shadow-xl rounded-xl'>
							<summary className='flex items-center justify-between cursor-pointer'>
								<h2 className='text-xl font-bold text-gray-900'>
									How Do I Post My Listing
								</h2>
								<span className='ml-1.5 flex-shrink-0 rounded-full bg-primary p-1.5 text-white sm:p-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>
							<p className='mt-4 leading-relaxed text-gray-700'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
								veritatis molestias culpa in, recusandae laboriosam neque
								aliquid libero nesciunt voluptate dicta quo officiis explicabo
								consequuntur distinctio corporis earum similique!
							</p>
						</details>
						<details className='group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden mb-5 shadow-xl rounded-xl'>
							<summary className='flex items-center justify-between cursor-pointer'>
								<h2 className='text-xl font-bold text-gray-900'>
									Can I Upload Attachments
								</h2>
								<span className='ml-1.5 flex-shrink-0 rounded-full bg-primary p-1.5 text-white sm:p-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>
							<p className='mt-4 leading-relaxed text-gray-700'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
								veritatis molestias culpa in, recusandae laboriosam neque
								aliquid libero nesciunt voluptate dicta quo officiis explicabo
								consequuntur distinctio corporis earum similique!
							</p>
						</details>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Questions
