import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

const SingleArticle = ({ blog }) => {
    const { _id, title, category, details, date, creator, thumbnail } = blog
    return (
        <article
            key={ _id }
            className='flex bg-white transition shadow-xl hover:shadow-md border rounded-md mb-5'
        >
            <div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
                <time
                    dateTime='2022-10-10'
                    className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'
                >
                    <span>{ category }</span>
                    <span className='w-px flex-1 bg-gray-900/10'></span>
                    <span>{ date }</span>
                </time>
            </div>
            <div className='hidden sm:block sm:basis-56'>
                <img
                    alt='Guitar'
                    src={ thumbnail }
                    className='aspect-square h-full w-full object-cover'
                />
            </div>
            <div className='flex flex-1 flex-col justify-between'>
                <div className='border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
                    <a href='/'>
                        <h3 className='font-bold uppercase text-gray-900'>
                            { title }
                        </h3>
                    </a>
                    <div>
                        <p className='flex items-center gap-2'>
                            <BsFillPersonFill className='bg-primary text-white p-1 rounded-full text-xl' />
                            <span>{ creator }</span>
                        </p>
                    </div>
                    <p className='mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3'>
                        { details }{ ' ' }
                    </p>
                </div>
                <div className='sm:flex sm:items-end sm:justify-end'>
                    <a
                        href='/'
                        className='block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-neutral'
                    >
                        Read Blog
                    </a>
                </div>
            </div>
        </article>
    );
};

export default SingleArticle;
