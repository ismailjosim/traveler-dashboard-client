import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import SideNav from './SideNav';

const Root = () => {
    return (






        <section >
            <TopHeader />
            <div className='drawer lg:drawer-open'>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */ }
                    <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-10 pb-24 md:pb-5">
                        <Outlet />
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <SideNav />
                </div>
            </div>

        </section>
    );
};

export default Root;
