import React from 'react';
import Navigation from '../UI/Navigation/NavBody';
import ListItems from '../UI/Navigation/NavSceleton';

const NavBody = () => {
    return (
       <Navigation className="navigation__header">
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
           <ListItems urlLink="/mars">Asd</ListItems>
       </Navigation>
    )
}

export default NavBody;
