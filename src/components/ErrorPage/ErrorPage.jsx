import React from 'react'
import logo from '../../assets/images/404-1.svg'
import Button from '../../utilities/Button'

const ErrorPage = () => {
	return (
		<div>
			<div className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
				<div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
					<div className='relative'>
						<div className='absolute'>
							<div className>
								<h1 className='my-2 text-gray-800 font-bold text-2xl'>
									Oops! Page Not Found
								</h1>
								<p className='my-2 text-gray-800'>
									We Are Sorry, But The Page You Requested Was Not Found.
								</p>
								<Button btnText={'Back To Home'} destination='/'></Button>
							</div>
						</div>
						<div>
							<img alt='' src='https://i.ibb.co/G9DC8S0/404-2.png' />
						</div>
					</div>
				</div>
				<div>
					<img alt='' src={logo} />
				</div>
			</div>
		</div>
	)
}

export default ErrorPage
