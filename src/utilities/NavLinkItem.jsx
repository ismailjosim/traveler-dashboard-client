import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ path, label, isActive, onClick }) => {
    return (
        <NavLink
            className={ `hover:text-white uppercase font-semibold transition-all duration-500 w-full block py-2 pl-5 text-xl activeClass ${ isActive ? 'bg-error' : '' }` }
            to={ path }
            onClick={ onClick }
        >
            { label }
        </NavLink>
    );
};


export default NavLinkItem;
