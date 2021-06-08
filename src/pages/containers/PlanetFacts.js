import React from 'react';
import { useParams } from 'react-router-dom';

import PlanetBrief from '../components/PlanetFactsComponents/PlanetBrief';
import PlanetNavigation from '../components/PlanetFactsComponents/PlanetFactsNavigation';
import PlanetMetaData from '../components/PlanetFactsComponents/PlanetMetaData';

const PlanetFacts = () => {
    const { planet, specs } = useParams();
   
    return (
        <section id="planet-facts">
            <PlanetNavigation planet={planet || "mercury"} />
            <PlanetBrief planet={planet || "mercury"} specs={specs || "overview"} />
            <PlanetMetaData planet={planet || "mercury"} />
        </section>
    )
}

export default PlanetFacts;
