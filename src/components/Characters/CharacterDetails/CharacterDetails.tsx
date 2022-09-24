import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {getCharacterById} from '../../../redux/characters/asyncActions';

const CharacterDetails = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const character = useAppSelector(state => state.characters.character)

    useEffect(() => {
        dispatch(getCharacterById(Number(id)))
    }, [])

    return (
        <div>
            <img src={character.image} alt={character.name}/>
        </div>
    );
};

export default CharacterDetails;