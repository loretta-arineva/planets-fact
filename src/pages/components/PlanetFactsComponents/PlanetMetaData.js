import React from 'react';
import PlanetDataList from './PlanetDataList';
import { planetData } from '../../../assets/data/data';

const PlanetMetaData = ({ planet }) => {
    const activePlanet = planetData.find(singlePlanet => {
        return singlePlanet.name.toLowerCase() === planet;
    });

    return (
        <div className="planet-metadata__container">
            <PlanetDataList data={activePlanet.rotation}>Rotation time</PlanetDataList>
            <PlanetDataList data={activePlanet.revolution}>Revolution time</PlanetDataList>
            <PlanetDataList data={activePlanet.radius}>Radius</PlanetDataList>
            <PlanetDataList data={activePlanet.temperature}>Average temp</PlanetDataList>
        </div>
    )
}

export default PlanetMetaData;
