import { BsCurrencyDollar } from 'react-icons/bs';
import { FaUsersGear, FaUserNurse } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";




const ShowIcon = ({ id, iconColor }) => {

    const iconComponents = {
        1: BsCurrencyDollar,
        2: FaUsersGear,
        3: FaUserNurse,
        4: IoAnalyticsSharp,
        5: FaShoppingCart,
        6: BiSolidError,
    };



    const IconComponent = iconComponents[id];
    return (
        <div className={ `rounded-full p-3 text-white ${ iconColor }` }>
            { IconComponent ? <IconComponent className="text-white" size={ 30 } /> : "no icon" } {/* Render the icon component */ }
        </div>
    );
};

export default ShowIcon;
