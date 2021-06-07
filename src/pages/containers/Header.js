import React from 'react';

import Logo from '../components/HeaderComponents/Logo';
import HeaderNavigation from '../components/HeaderComponents/HeaderNavigation';
import SideDrawer from '../components/HeaderComponents/SideDrawer';

const Header = () => {
    return (
        <header>
            <Logo></Logo>
            <HeaderNavigation />
            <SideDrawer />
        </header>
    )
}

export default Header;
