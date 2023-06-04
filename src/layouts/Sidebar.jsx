import { FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-primary text-white h-screen w-full">
            <div className="p-4">
                {/* Sidebar items */ }
                <ul className="space-y-5 mt-5">
                    <li>
                        <NavLink className='flex items-center gap-2 text-xl font-semibold hover:text-white hover:bg-primary uppercase transition-all duration-500 rounded-lg' to="/destinations">
                            <FaMapMarkerAlt size={ 30 } />
                            <span>Destinations</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-2 text-xl font-semibold hover:text-white hover:bg-primary uppercase transition-all duration-500 rounded-lg' to="/packages">
                            <FaMapMarkerAlt size={ 30 } />
                            <span>Packages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-2 text-xl font-semibold hover:text-white hover:bg-primary uppercase transition-all duration-500 rounded-lg' to="/users">
                            <FaMapMarkerAlt size={ 30 } />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-2 text-xl font-semibold hover:text-white hover:bg-primary uppercase transition-all duration-500 rounded-lg' to="/users">
                            <FaMapMarkerAlt size={ 30 } />
                            <span>Reviews</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-2 text-xl font-semibold hover:text-white hover:bg-primary uppercase transition-all duration-500 rounded-lg' to="/admin">
                            <FaMapMarkerAlt size={ 30 } />
                            <span>Admin</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            {/* Bottom section of sidebar */ }
            <div className="p-4">
                {/* Add any additional content here */ }
            </div>
        </div>
    );
}

export default Sidebar

