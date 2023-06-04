import React from 'react';
import OfferCard from './OfferSections/OfferCard';

const Offers = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <section>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    arr.map((item, idx) => {
                        return <OfferCard key={ idx } />

                    })
                }

            </div>
        </section>
    );
};

export default Offers;
