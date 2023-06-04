import TopNav from './TopNav';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <section>
            <TopNav />
            <div className='grid grid-cols-12'>
                <div className='col-span-2'>
                    <Sidebar />
                </div>
                <div className='col-span-10'>

                    <div className="">{ children }</div>
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;
