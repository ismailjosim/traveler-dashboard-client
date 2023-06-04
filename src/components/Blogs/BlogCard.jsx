import React from 'react';
import { BsCalendar3, BsStarFill } from 'react-icons/bs';
import pic from '../../assets/destinations/destination2.jpg'
const BlogCard = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div className='card card-compact w-full bg-base-100 shadow-lg rounded-md bottom_animation destination_item transition-all duration-500 ease-in-out' >
            <figure>
                <img
                    className='transition-all duration-500 ease-in-out w-full overflow-hidden'
                    src={ pic }
                    alt='Shoes'
                />
            </figure>
            <div className='relative'>
                <button className='btn btn-primary text-white absolute -bottom-5 right-3 flex gap-1'>
                    <BsCalendar3 />
                    <span>9 Days Tours</span>
                </button>
            </div>
            <div className='card-body mt-5'>
                <h3 className='text-xl font-medium text-primary'>Maldives</h3>
                <h2 className='card-title text-2xl capitalize'>
                    Hurawalhi Island
                </h2>
                <div className='flex gap-1 items-center text-secondary text-lg'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <span className='text-neutral'>(20)</span>
                </div>
                <p className='text-base text-neutral my-5'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                </p>
                <hr />
                <div className='card-actions justify-start py-2'>
                    <p className='text-neutral font-medium'>
                        <span className='text-primary font-bold'>$180.00</span>
                        <span className='mx-1'>|</span>
                        <span>Per Person</span>
                    </p>
                </div>
            </div>
        </div>
    )

};

export default BlogCard;
