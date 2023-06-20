import { useEffect, useState } from 'react';
import CollapsibleSection from '../utilities/CollapsibleSection';
import { useLocation } from 'react-router-dom';
import { RiMapPin2Fill } from 'react-icons/ri';


const SideNav = () => {
    const [isActive, setActive] = useState('/');
    const location = useLocation();
    const [isDestinationsCollapsed, setDestinationsCollapsed] = useState(false);
    const [isPackagesCollapsed, setPackagesCollapsed] = useState(false);
    const [isUsersCollapsed, setUsersCollapsed] = useState(false);
    const [isBlogsCollapsed, setIsBlogsCollapsed] = useState(false);
    const [isProfileCollapsed, setIsProfileCollapsed] = useState(false);

    useEffect(() => {
        setActive(location.pathname);
        setDestinationsCollapsed(location.pathname === '/destination/add' || location.pathname === '/destinations');
        setPackagesCollapsed(location.pathname === '/all-packages' || location.pathname === '/packages');
        setUsersCollapsed(location.pathname === '/users' || location.pathname === '/manage-user');
        setIsBlogsCollapsed(location.pathname === '/all-blogs' || location.pathname === '/add-blogs' || location.pathname === '/add-blog');

        setIsProfileCollapsed(location.pathname === '/profile' || location.pathname === '/manage-profile');
    }, [location.pathname]);

    const handleCollapseToggle = (type) => {
        if (type === 'destinations') {
            setDestinationsCollapsed(!isDestinationsCollapsed);
        } else if (type === 'packages') {
            setPackagesCollapsed(!isPackagesCollapsed);
        } else if (type === 'users') {
            setUsersCollapsed(!isUsersCollapsed);
        } else if (type === 'blogs') {
            setIsBlogsCollapsed(!isBlogsCollapsed);
        } else if (type === 'profile') {
            setIsProfileCollapsed(!isProfileCollapsed)
        }
    };

    return (
        <div className="pt-10">
            <ul className="flex flex-row md:flex-col items-center justify-center">
                <CollapsibleSection
                    title="Destinations"
                    icon={ RiMapPin2Fill }
                    path1="/destinations"
                    label1="All Destinations"
                    isActive1={ isActive === '/destinations' }
                    onClick1={ () => setActive('/destinations') }
                    path2="/destination/add"
                    label2="Add Destination"
                    isActive2={ isActive === '/destination/add' }
                    onClick2={ () => setActive('/destination/add') }
                    isCollapsed={ isDestinationsCollapsed }
                    onCollapseToggle={ () => handleCollapseToggle('destinations') }
                />
                <CollapsibleSection
                    title="Packages"
                    icon={ RiMapPin2Fill }
                    path1="/all-packages"
                    label1="All Packages"
                    isActive1={ isActive === '/all-packages' }
                    onClick1={ () => setActive('/all-packages') }
                    path2="/packages"
                    label2="Add Packages"
                    isActive2={ isActive === '/packages' }
                    onClick2={ () => setActive('/packages') }
                    isCollapsed={ isPackagesCollapsed }
                    onCollapseToggle={ () => handleCollapseToggle('packages') }
                />
                <CollapsibleSection
                    title="Users"
                    icon={ RiMapPin2Fill }
                    path1="/users"
                    label1="All Users"
                    isActive1={ isActive === '/users' }
                    onClick1={ () => setActive('/users') }
                    path2="/manage-user"
                    label2="Manage User"
                    isActive2={ isActive === '/manage-user' }
                    onClick2={ () => setActive('/manage-user') }
                    isCollapsed={ isUsersCollapsed }
                    onCollapseToggle={ () => handleCollapseToggle('users') }
                />
                <CollapsibleSection
                    title="Profile"
                    icon={ RiMapPin2Fill }
                    path1="/profile"
                    label1="All Users"
                    isActive1={ isActive === '/profile' }
                    onClick1={ () => setActive('/profile') }
                    path2="/manage-profile"
                    label2="Manage Profile"
                    isActive2={ isActive === '/manage-profile' }
                    onClick2={ () => setActive('/manage-profile') }
                    isCollapsed={ isProfileCollapsed }
                    onCollapseToggle={ () => handleCollapseToggle('profile') }
                />
                <CollapsibleSection
                    title="Listing"
                    icon={ RiMapPin2Fill }
                    path1="/profile"
                    label1="All Users"
                    isActive1={ isActive === '/profile' }
                    onClick1={ () => setActive('/profile') }
                    path2="/manage-profile"
                    label2="Manage Profile"
                    isActive2={ isActive === '/manage-profile' }
                    onClick2={ () => setActive('/manage-profile') }
                    isCollapsed={ isProfileCollapsed }
                    onCollapseToggle={ () => handleCollapseToggle('profile') }
                />

            </ul>
        </div>
    );
};

export default SideNav;
