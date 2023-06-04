import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
	// const { user, userLogout } = useContext(AuthContext);
	const [setIsActive] = useState('/')


	const menuItems = (
		<>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">Home</span>

					Home
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/about'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">About</span>

					About
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/destinations'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">Destination</span>

					Destination
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/packages'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">Packages</span>

					Packages
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/blog'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">Blog</span>

					Blog
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/contact'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">Contact Us</span>

					Contact Us
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/faq'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">FAQs</span>

					FAQs
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/cart'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">Cart</span>

					Cart
				</NavLink>
			</li>
			<li className='group relative flex justify-center'>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/login'
				>
					<span className="absolute -top-8 z-30 scale-0  transition-all ease-in-out rounded bg-error p-2 text-xs text-white group-hover:scale-100 delay-100">login</span>

					login/register
				</NavLink>
			</li>
		</>
	)

	return (
		<header>
			<div className='navbar font-semibold p-0 w-11/12 mx-auto'>
				<div className='navbar-start'>
					<Link
						onClick={ () => setIsActive('/') }
						className='text-2xl font-extrabold uppercase'
						to='/'
					>
						Traveler
					</Link>
				</div>
				<div className='navbar-end'>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal p-0 gap-3'>{ menuItems }</ul>
					</div>
					<div className='dropdown dropdown-bottom dropdown-end'>
						<label tabIndex={ 0 } className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</label>
						<ul className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
							{ menuItems }
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
