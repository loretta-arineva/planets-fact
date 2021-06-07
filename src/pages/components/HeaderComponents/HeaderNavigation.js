import React from 'react';
import Navigation from '../UI/Navigation/NavBody';
import ListItems from '../UI/Navigation/NavSceleton';
import Hamburger from '../UI/Navigation/HamburgerMenu';

const NavBody = ({clicked}) => {
    return (
        <>
            <Hamburger clicked={clicked}/>
            <Navigation className="navigation__header">
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
                <ListItems urlLink="/mars">Asd</ListItems>
            </Navigation>
        </>
    )
}

export default NavBody;
