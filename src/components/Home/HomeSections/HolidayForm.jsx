import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa';
import '../../../styles/Custom.css'

import DatePicker from "react-datepicker";

const HolidayForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())


    return (
        <div className='relative z-10 pt-10'>
            <div className="section-shape lg:mt-12 md:mt-12 mt-20" />
            <div className="w-11/12 mx-auto grid lg:grid-cols-6 grid-cols-1 items-center bg-white shadow-xl rounded-lg overflow-hidden z-10">
                <div className="bg-primary col-span-1">
                    <h3 className='flex gap-2 lg:items-start items-end font-semibold p-2 py-10 text-white'>
                        <FiMapPin className='lg:text-6xl md:text-4xl text-3xl' />
                        <span className='text-2xl font-bold'> Find Your Holidays</span>
                    </h3>
                </div>
                <div className='col-span-5 grid lg:grid-cols-5 px-0 lg:px-5 md:px-2 gap-5 lg:mt-0 md:mt-0 mt-5'>
                    <div className='px-2 lg:px-0'>
                        <select className="select w-full border border-primary">
                            <option>Destination</option>
                            <option value={ 1 }>USA</option>
                            <option value={ 2 }>Argentina</option>
                            <option value={ 3 }>Belgium</option>
                            <option value={ 4 }>Canada</option>
                            <option value={ 5 }>Denmark</option>
                        </select>
                    </div>
                    <div className='px-2 lg:px-0'>
                        <select className="select w-full border border-primary">
                            <option>Travel Type</option>
                            <option value={ 1 }>Single Tour</option>
                            <option value={ 2 }>Family Tour</option>
                        </select>
                    </div>
                    <div className='px-2 lg:px-0'>
                        <DatePicker
                            className="select w-full border border-primary"
                            selected={ startDate }
                            onChange={ (date) => setStartDate(date) }
                            dateFormat="PP"
                            minDate={ new Date() } //Disable dates before the start date

                        />
                    </div>
                    <div className='px-2 lg:px-0'>
                        <DatePicker
                            className="select w-full border border-primary"
                            selected={ endDate }
                            onChange={ (date) => setEndDate(date) }
                            dateFormat="PP"
                            minDate={ startDate }
                        />
                    </div>
                    <div className='flex flex-col px-2 lg:px-0 lg:mb-0 mb-5'>
                        <button className='btn btn-primary text-white hover:bg-secondary transition-all duration-300 flex gap-1'>
                            <FaSearch />
                            <span>Search Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidayForm;
