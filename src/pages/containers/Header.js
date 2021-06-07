import React from 'react';

import Logo from '../components/HeaderComponents/Logo';
import HeaderNavigation from '../components/HeaderComponents/HeaderNavigation';

const Header = () => {
    return (
        <header>
            <Logo></Logo>
            <HeaderNavigation />
        </header>
    )
}

export default Header;
