import React from 'react';
import { Link } from 'react-router-dom';


const CTA = () => {
    return (
        <section className='bg-primary py-20'>
            <div className="w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 justify-between items-center text-white">
                <div>
                    <p className="text-lg font-normal">CALL TO ACTION</p>
                    <h3 className="lg:text-4xl md:text-3xl text-2xl leading-relaxed font-bold my-5">
                        READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!
                    </h3>
                    <p>
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
                    </p>
                </div>
                <div className='flex lg:justify-end mt-10 lg:mt-0 md:mt-5 items-center'>
                    <Link to={ '/contact' } className="btn bg-white text-primary px-5 py-1 text-base relative z-10 btn-custom font-semibold">
                        Contact US
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default CTA;
