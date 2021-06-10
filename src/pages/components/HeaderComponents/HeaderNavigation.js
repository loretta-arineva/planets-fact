import React from 'react';
import Navigation from '../UI/Navigation/NavBody';
import ListItems from '../UI/Navigation/NavSceleton';
import Hamburger from '../UI/Navigation/HamburgerMenu';

const NavBody = ({clicked}) => {
    return (
        <>
            <Hamburger clicked={clicked}/>
            <Navigation className="navigation__header">
                <ListItems urlLink="/mercury/overview">Mercury</ListItems>
                <ListItems urlLink="/venus/overview">Venus</ListItems>
                <ListItems urlLink="/earth/overview">Earth</ListItems>
                <ListItems urlLink="/mars/overview">Mars</ListItems>
                <ListItems urlLink="/jupiter/overview">Jupiter</ListItems>
                <ListItems urlLink="/saturn/overview">Saturn</ListItems>
                <ListItems urlLink="/uranus/overview">Uranus</ListItems>
                <ListItems urlLink="/neptune/overview">Neptune</ListItems>
            </Navigation>
        </>
    )
}

export default NavBody;
