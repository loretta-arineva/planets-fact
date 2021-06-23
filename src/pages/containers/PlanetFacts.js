import React from 'react';
import { useParams } from 'react-router-dom';

import PlanetBrief from '../components/PlanetFactsComponents/PlanetBrief';
import PlanetNavigation from '../components/PlanetFactsComponents/PlanetFactsNavigation';
import PlanetMetaData from '../components/PlanetFactsComponents/PlanetMetaData';

const PlanetFacts = () => {
    const { planet, specs } = useParams();

    return (
        <main id="planet-facts">
            <PlanetNavigation planet={planet || "mercury"} className="navigation__planets" />
            <div className="planet-main__container">
                <PlanetBrief planet={planet || "mercury"} specs={specs || "overview"} />
                <PlanetMetaData planet={planet || "mercury"} />
            </div>
        </main>
    )
}

export default PlanetFacts;
