import React from 'react';

const NavBody = ({ className, children }) => {
    return (
        <nav className={className}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default NavBody;
