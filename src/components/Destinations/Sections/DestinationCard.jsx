import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ item }) => {
    const { _id, country, place, tourPlace, thumbnail, placeId } = item
    return (
        <>
            <Link to={ `/destination/${ placeId }` } key={ _id } className='destination_item'>
                <div className='transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
                    <img
                        className='transition-all ease-in-out duration-500 w-full'
                        src={ thumbnail }
                        alt='destination'
                    />
                    <div className='trend-content flex items-center justify-between absolute bottom-0 p-6 w-full z-[1]'>
                        <div className='trend-content-title'>
                            <h5 className='mb-0'>
                                <span className='text-secondary'>
                                    { country }
                                </span>
                            </h5>
                            <h3 className='mb-0 text-white text-2xl font-bold capitalize '>
                                { place }
                            </h3>
                        </div>
                        <span className='text-white bg-primary p-1 px-2 rounded-md'>
                            { tourPlace } Tours
                        </span>
                    </div>
                    <div className='color-overlay absolute left-0 bottom-0 h-1/2 w-full opacity-60 transition-all ease-in-out duration-500 bg-gradient-to-b from-transparent to-slate-900' ></div>
                </div>
            </Link>
        </>
    );
};

export default DestinationCard;
