import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {getCharacterById} from '../../../redux/characters/asyncActions';
import styles from './CharacterProfile.module.scss'
import back from '../../../assets/back-arrow.svg'

const CharacterProfile = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const character = useAppSelector(state => state.characters.character)

    useEffect(() => {
        dispatch(getCharacterById(Number(id)))
    }, [])

    return (
        <div className={styles.wrapper}>
            <Link className={styles.back} to={'/character'}>
                <img className={styles.backButton} src={back} alt={'Back'}></img>
            </Link>
            <img className={styles.avatar} src={character.image}
                 alt={character.name}/>
            <div className={styles.container}>
                <div>Name: {character.name}</div>
                <div>Status: {character.status}</div>
                <div>Species: {character.species}</div>
                <div>Gender: {character.gender}</div>
                <div>Origin name: {character.origin && character.origin.name}</div>
                <div>Location: {character.location && character.location.name}</div>
            </div>
        </div>
    );
};

export default CharacterProfile;