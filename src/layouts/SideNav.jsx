import React from 'react'
import { Link } from 'react-router-dom'
import { RiMapPin2Fill } from 'react-icons/ri'

const SideNav = () => {
    return (
        <nav className='menu p-4 w-80 text-base-content bg-primary shadow-xl h-screen fixed bottom-0 mt-12 md:relative md:h-screen z-10 md:w-48 content-center'>
            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <div className="collapse text-white">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex items-center">
                            <RiMapPin2Fill size={ 30 } className="icon" />
                            <span className='mt-2'>Destinations</span>
                        </div>
                        <div className="collapse-content">
                            <ul className="w-full">
                                <li><Link to="/" className="transition duration-300 ease-in-out hover:text-slate-800">Add Destinations</Link></li>
                            </ul>
                        </div>
                    </div>
                </ul>
            </div>

        </nav>

    )
}

export default SideNav
