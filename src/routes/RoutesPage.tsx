import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Characters from '../components/Characters/Characters';
import CharacterProfile from '../components/Characters/CharacterDetails/CharacterProfile';

const RoutesPage = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'character'}/>}/>
            <Route path={'/character'} element={<Characters/>}/>
            <Route path={'/character/:id'} element={<CharacterProfile/>}/>
            <Route path={'/locations'} element={'Locations'}/>
            <Route path={'/locations/:id'} element={'Location'}/>
            <Route path={'/episode'} element={'Episodes'}/>
            <Route path={'/episode/:id'} element={'Episode'}/>
            <Route path={'/404'} element={'Page not found'}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
        </Routes>
    );
};

export default RoutesPage;