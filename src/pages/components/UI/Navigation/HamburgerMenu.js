import React, { useReducer } from 'react';
import hamburger from '../../../../assets/images/icon-hamburger.svg';

const initialState = { open: false };

const reducer = (state, action) => {
    switch (action.type) {
        case "toggle":
            return { open: !state.open };
        default:
            throw new Error();
    }
};
const toggle = () => ({ type: "toggle" });

const HamburgerMenu = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSideDrawerHandler = (event) => {
        dispatch(toggle());
        const sidedrawer = document.body.querySelector(".side-drawer");

        if (sidedrawer.classList.contains("open")) {
            document.body.querySelector(".side-drawer").classList.remove('open');
            document.body.classList.remove('lock-screen');
        } else {
            document.body.querySelector(".side-drawer").classList.add('open');
            document.body.classList.add('lock-screen');

        }
    }

    return (
        <div className="hamburger__container" onClick={openSideDrawerHandler}>
            <img src={hamburger} alt="Hamburger Menu Icon" className="hamburger-icon" />
        </div>
    )
}

export default HamburgerMenu;
