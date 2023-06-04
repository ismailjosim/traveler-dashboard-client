import React from 'react';
import SectionHeading from './../../../utilities/SectionHeading';
import Slider from 'react-slick';


const Reviews = () => {
    const heading = {
        subHeading: "CLIENT'S REVIEWS",
        headingOne: "TRAVELER'S",
        headingTwo: "TESTIMONIAL",
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }

    const contents = [
        {
            name: 'person',
            post: 'occupation',
            details:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
        },
        {
            name: 'person',
            post: 'occupation',
            details:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
        },
        {
            name: 'person',
            post: 'occupation',
            details:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
        },
        {
            name: 'person',
            post: 'occupation',
            details:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
        },
        {
            name: 'person',
            post: 'occupation',
            details:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
        },
        {
            name: 'person',
            post: 'occupation',
            details:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti nesciunt veritatis, omnis deleniti consequatur ipsum itaque ullam adipisci sequi.',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    }



    return (
        <div>
            <SectionHeading heading={ heading } />
            <section className='mb-20'>
                <Slider className='w-11/12 mx-auto' { ...settings }>
                    { contents.map((content, idx) => {
                        const { name, post, details } = content
                        return (
                            <div key={ idx }>
                                <p className="flex items-center text-center text-gray-500 lg:mx-8">{ details }</p>

                                <div className="flex flex-col items-center justify-center mt-8 ">
                                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                    <div className="mt-4 text-center text-black">
                                        <h1 className="font-semibold">{ name }</h1>
                                        <span className="text-sm">{ post }</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                </Slider>
            </section>
        </div>
    );
};

export default Reviews;
