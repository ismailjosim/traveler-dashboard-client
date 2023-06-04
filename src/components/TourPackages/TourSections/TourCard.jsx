import React from 'react';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TourCard = ({ item }) => {
    const { title, price, details, stayingDay, stayingNight, peoples, location, thumbnail, reviews, packageId } = item;

    return (
        <div className='grid lg:grid-cols-3 mb-10 shadow-xl overflow-hidden rounded-lg'>
            <div>
                <Link to={ `/package/${ packageId }` }>
                    <img src={ thumbnail } alt="" className='h-72 w-full object-cover' />
                </Link>
            </div>
            <div className='bg-slate-200 lg:pt-10 pt-5 px-5'>
                <Link className='lg:text-3xl text-2xl lg:font-bold font-semibold' to={ `/package/${ packageId }` }>{ title }</Link>
                <p className='text-base my-2'>{ details }</p>
                <div className='bg-white shadow-md rounded-full py-2 px-5 inline-block lg:mt-5 my-5'>
                    <div className='flex gap-2 text-sm font-medium text-primary items-center'>
                        <p className='flex items-center gap-1'>
                            <AiFillClockCircle />
                            <span>{ stayingDay }D/{ stayingNight }N</span>
                        </p>
                        <span>|</span>
                        <p className='flex items-center gap-1'>
                            <IoMdPeople />
                            <span>pax: { peoples }</span>
                        </p>
                        <span>|</span>
                        <p className='flex items-center gap-1'>
                            <FaMapMarkerAlt />
                            <span>{ location }</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-primary flex justify-center items-center lg:py-0 py-5 text-white'>
                <div className='text-center'>
                    <div className='flex items-center gap-5'>
                        <span>({ reviews } reviews)</span>
                        <p className='flex items-center gap-1 text-lg text-white'>
                            <AiFillHeart />
                            <AiFillHeart />
                            <AiFillHeart />
                            <AiFillHeart />
                            <AiFillHeart />
                        </p>
                    </div>
                    <div className='py-5'>
                        <h3 className='text-4xl font-bold'>${ price }</h3>
                        <p>/ Per person</p>
                    </div>
                    <div>
                        <button className='btn btn-outline text-white'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
