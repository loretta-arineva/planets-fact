import React from 'react';
import Navigation from './NavBody';
import ListItems from './NavSceleton';

const SideDrawerNavigation = () => {
    return (
        <Navigation className="navigation__side-drawer">
            <ListItems urlLink="/mercury/overview">Mercury<span>&#62;</span></ListItems>
            <ListItems urlLink="/venus/overview">Venus <span>&#62;</span></ListItems>
            <ListItems urlLink="/earth/overview">Earth <span>&#62;</span></ListItems>
            <ListItems urlLink="/mars/overview">Mars <span>&#62;</span></ListItems>
            <ListItems urlLink="/jupiter/overview">Jupiter <span>&#62;</span></ListItems>
            <ListItems urlLink="/saturn/overview">Saturn <span>&#62;</span></ListItems>
            <ListItems urlLink="/uranus/overview">Uranus <span>&#62;</span></ListItems>
            <ListItems urlLink="/neptune/overview">Neptune <span>&#62;</span></ListItems>
        </Navigation>
    )
}

export default SideDrawerNavigation;
