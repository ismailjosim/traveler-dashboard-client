import TopNav from './TopNav';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
    return (
        <section>
            <TopNav />
            <div className='grid grid-cols-12'>
                <div className='col-span-2'>
                    <Sidebar />
                </div>
                <div className='col-span-10'>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;
