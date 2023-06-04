import React from 'react';

const Stars = () => {



    return (
        <section className="w-11/12 mx-auto relative -bottom-12">
            <div>
                <div className="bg-white shadow-2xl rounded-lg">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 py-5">
                        <div className='border-r-2'>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <h3 className="text-4xl font-bold">80K+</h3>
                                <p className="text-base">SATISFIED CUSTOMER</p>
                            </div>
                        </div>
                        <div className='border-r-2'>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <h3 className="text-4xl font-bold">18+</h3>
                                <p className="text-base">ACTIVE MEMBERS</p>
                            </div>
                        </div>
                        <div className='border-r-2'>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <h3 className="text-4xl font-bold">220+</h3>
                                <p className="text-base">TOUR DESTINATION</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <h3 className="text-4xl font-bold">75+</h3>
                                <p className="text-base">TRAVEL GUIDES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Stars;
