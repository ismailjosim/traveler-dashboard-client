import React from 'react';
import NavLinkItem from './NavLinkItem';

const CollapsibleSection = ({ title, icon, path1, label1, isActive1, onClick1, path2, label2, isActive2, onClick2, isCollapsed, onCollapseToggle }) => {
    return (
        <li className={ `collapse text-white rounded-none ${ isCollapsed ? 'active' : '' }` }>
            <input type="checkbox" checked={ isCollapsed } onChange={ onCollapseToggle } />
            <div className="collapse-title text-xl font-medium flex items-center">
                { icon && React.createElement(icon, { size: 30, className: 'icon' }) }
                <span className="mt-2">{ title }</span>
            </div>
            <div className="collapse-content ml-0 rounded-none p-0 w-full">
                <ul className="w-full">
                    <NavLinkItem path={ path1 } label={ label1 } isActive={ isActive1 } onClick={ onClick1 } />
                    <NavLinkItem path={ path2 } label={ label2 } isActive={ isActive2 } onClick={ onClick2 } />
                </ul>
            </div>
        </li>
    );
};

export default CollapsibleSection
