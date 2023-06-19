import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import SideNav from './SideNav';

const Root = () => {
    return (

        <section >
            <TopHeader />
            <div className='flex justify-between gap-5'>
                <div className='w-[15%]'>
                    <div className='fixed left-0 top-0 bottom-0 bg-primary w-[15%]'>
                        <SideNav></SideNav>
                    </div>
                </div>
                <div className='w-[85%] h-screen'>
                    <Outlet />
                </div>
            </div>

        </section>
    );
};

export default Root;
