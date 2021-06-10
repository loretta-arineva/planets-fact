import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavSceleton = ({ urlLink, children }) => {
    return (
        <li>
            <NavLink tag={Link} to={urlLink} activeClassName="selected">
                {children}
            </NavLink>
        </li>
    )
}

export default NavSceleton;
