import React from 'react';
import {useParams} from 'react-router-dom';

const CharacterDetails = () => {
    const {id} = useParams()

    return (
        <div>
            Character Details
        </div>
    );
};

export default CharacterDetails;