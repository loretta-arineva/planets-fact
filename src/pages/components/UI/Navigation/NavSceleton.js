import React from 'react';
import { NavLink } from 'react-router-dom';

const NavSceleton = ({ urlLink, children }) => {
    return (
        <NavLink to={urlLink} activeClassName="selected">
            <li>{children}</li>
        </NavLink>
    )
}

export default NavSceleton;
