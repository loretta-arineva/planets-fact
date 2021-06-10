import React from 'react';
import Navigation from './NavBody';
import ListItems from './NavSceleton';

const SideDrawerNavigation = () => {
    return (
        <Navigation className="navigation__side-drawer">
            <ListItems urlLink="/mercury/overview">Mercury</ListItems>
            <ListItems urlLink="/venus/overview">Venus</ListItems>
            <ListItems urlLink="/earth/overview">Earth</ListItems>
            <ListItems urlLink="/mars/overview">Mars</ListItems>
            <ListItems urlLink="/jupiter/overview">Jupiter</ListItems>
            <ListItems urlLink="/saturn/overview">Saturn</ListItems>
            <ListItems urlLink="/uranus/overview">Uranus</ListItems>
            <ListItems urlLink="/neptune/overview">Neptune</ListItems>
        </Navigation>
    )
}

export default SideDrawerNavigation;
