import React from 'react';
import { useParams } from 'react-router-dom';

import PlanetBrief from '../components/PlanetFactsComponents/PlanetBrief';
import PlanetNavigation from '../components/PlanetFactsComponents/PlanetFactsNavigation';
import PlanetMetaData from '../components/PlanetFactsComponents/PlanetMetaData';

const PlanetFacts = () => {
    const {planet, specs} = useParams();
    console.log(planet, specs);

    return (
        <section id="planet-facts">
            <PlanetNavigation planet={planet} />
            <PlanetBrief planet={planet}/>
            <PlanetMetaData planet={planet}/>
        </section>
    )
}

export default PlanetFacts;
