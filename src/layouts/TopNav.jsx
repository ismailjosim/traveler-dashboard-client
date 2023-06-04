import { HiOutlineBell, HiOutlineShoppingCart } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const TopNav = () => {
    const location = useLocation();
    const currentPage = location.pathname.substring(1);

    return (
        <div className="bg-gray-100 py-5">
            <div className='flex items-center justify-between mx-2'>
                {/* Header: Logo or brand */ }
                <div className="text-xl font-semibold">Traveler Dashboard</div>
                {/* section: Display the current page */ }
                <div className='text-lg font-semibold uppercase text-primary'>{ currentPage }</div>

                {/* Link: others link */ }
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/notifications">
                            <HiOutlineBell className="w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                            <HiOutlineShoppingCart className="w-6 h-6" />
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default TopNav;
