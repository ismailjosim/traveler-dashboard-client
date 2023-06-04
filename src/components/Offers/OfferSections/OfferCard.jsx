import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io'

const OfferCard = () => {
    return (
        <div>
            <a href="/" className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat">
                <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white">UPTO 25% Off</span>

                <div className="relative p-4 pt-40 w-3/4">
                    <div className='bg-white/80 p-5 rounded-xl'>
                        <div className='flex gap-2 text-sm font-medium text-primary mb-2'>
                            <p className='flex items-center gap-1'>
                                <AiFillClockCircle />
                                <span>7D/6N</span>
                            </p>
                            <span>|</span>
                            <p className='flex items-center gap-1'>
                                <IoMdPeople />
                                <span>pax: 10</span>
                            </p>
                            <p className='flex items-center gap-1'>
                                <FaMapMarkerAlt />
                                <span>pax: 10</span>
                            </p>
                        </div>
                        <h3 className='text-xl font-bold text-accent'>TOUR TO SATORI</h3>
                        <p className='text-sm my-2'>Fusce hic augue velit wisi ips quibus dam pariatur, iusto.</p>
                        <div className='flex gap-2 text-lg font-bold text-primary my-2'>
                            <span>Price:</span>
                            <span className='line-through'>$1300</span>
                            <span>$1000</span>
                        </div>
                        <button className='btn btn-primary rounded-full text-white'>Book Now</button>

                    </div>
                </div>
            </a>
        </div>
    );
};

export default OfferCard;
