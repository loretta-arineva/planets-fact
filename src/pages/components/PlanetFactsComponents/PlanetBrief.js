import React, { useReducer, useEffect } from 'react';
import { planetData } from '../../../assets/data/data';

const initialState = {
    imgUrl: "planet"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "overview":
            return { imgUrl: "planet" };
        case "structure":
            return { imgUrl: "internal" };
        case "surface":
            return { imgUrl: "planet" };
        default:
            throw new Error();

    }
}

const PlanetBrief = ({ imgUrl, planet, specs }) => {
    const [state, dispatch] = useReducer(reducer, initialState,);
    const activePlanet = planetData.find(singlePlanet => {
        return singlePlanet.name.toLowerCase() === planet;
    });

    useEffect(() => {
        dispatch({ type: specs });
    }, [specs]);
   
    return (
        <div className="planet-overview__container">
            <div className="planet-image__container">
                <img src={activePlanet.images[state.imgUrl]} alt="" className={activePlanet.name.toLowerCase()}/>
                {specs === "surface" ? (
                <img src={activePlanet.images["geology"]} alt="" />

                ): ""}
            </div>
            <div className="planet-text__container">
                <h1>{activePlanet.name}</h1>
                <p>{activePlanet[specs].content}</p>
                <p className="source">Source: <a className="source-link" href={activePlanet[specs].source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
            </div>
        </div>
    )
}

export default PlanetBrief;
