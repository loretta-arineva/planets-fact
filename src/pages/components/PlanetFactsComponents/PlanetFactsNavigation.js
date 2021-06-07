import React from 'react'
import Navigation from '../UI/Navigation/NavBody';
import ListItems from '../UI/Navigation/NavSceleton';

const PlanetFactsNavigation = ({ planet }) => {
    const url = `/${planet}`
    return (
        <Navigation className="navigation__planets">
            <ListItems urlLink={url + "/overview"}>Overview</ListItems>
            <ListItems urlLink={url + "/structure"}>Structure</ListItems>
            <ListItems urlLink={url + "/surface"}>Surface</ListItems>
        </Navigation>
    )
}

export default PlanetFactsNavigation
