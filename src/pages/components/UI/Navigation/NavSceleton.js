import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavSceleton = ({ urlLink, children }) => {
    return (
        <NavLink tag={Link} to={urlLink} activeClassName="selected">
            <li>{children}</li>
        </NavLink>
    )
}

export default NavSceleton;
