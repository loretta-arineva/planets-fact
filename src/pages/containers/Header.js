import React, { useState} from 'react';

import Logo from '../components/HeaderComponents/Logo';
import HeaderNavigation from '../components/HeaderComponents/HeaderNavigation';

const Header = () => {
    // const [state, setstate] = useState(initialState)
    
    return (
        <header>
            <Logo></Logo>
            <HeaderNavigation />
        </header>
    )
}

export default Header;
