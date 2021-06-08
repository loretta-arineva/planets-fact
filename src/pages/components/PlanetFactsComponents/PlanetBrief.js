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
        <div>
            <div className="planet-image__container">
                <img src={activePlanet.images[state.imgUrl]} alt="" />
                {specs === "surface" ? (
                <img src={activePlanet.images["geology"]} alt="" />

                ): ""}
            </div>
            <div className="planet-text__container">
                <p>{activePlanet[specs].content}</p>
            </div>
        </div>
    )
}

export default PlanetBrief;
