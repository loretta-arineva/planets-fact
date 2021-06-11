import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavSceleton = ({ urlLink, children, className }) => {
    return (
        <li className={className}>
            <NavLink tag={Link} to={urlLink} activeClassName="selected">
                {children}
            </NavLink>
        </li>
    )
}

export default NavSceleton;
