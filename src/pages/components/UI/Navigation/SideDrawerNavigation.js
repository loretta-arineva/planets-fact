import React from 'react';
import Navigation from './NavBody';
import ListItems from './NavSceleton';

const SideDrawerNavigation = () => {
    return (
        <Navigation className="navigation__side-drawer">
            <ListItems className="mercury" urlLink="/mercury/overview">Mercury<span>&#62;</span></ListItems>
            <ListItems className="venus" urlLink="/venus/overview">Venus <span>&#62;</span></ListItems>
            <ListItems className="earth" urlLink="/earth/overview">Earth <span>&#62;</span></ListItems>
            <ListItems className="mars" urlLink="/mars/overview">Mars <span>&#62;</span></ListItems>
            <ListItems className="jupiter" urlLink="/jupiter/overview">Jupiter <span>&#62;</span></ListItems>
            <ListItems className="saturn" urlLink="/saturn/overview">Saturn <span>&#62;</span></ListItems>
            <ListItems className="uranus" urlLink="/uranus/overview">Uranus <span>&#62;</span></ListItems>
            <ListItems className="neptune" urlLink="/neptune/overview">Neptune <span>&#62;</span></ListItems>
        </Navigation>
    )
}

export default SideDrawerNavigation;
