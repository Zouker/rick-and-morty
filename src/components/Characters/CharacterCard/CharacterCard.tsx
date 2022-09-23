import React from 'react';
import {CharacterType} from '../../../redux/characters/types';
import styles from './CharacterCard.module.scss'
import {Link} from 'react-router-dom';

type CharacterPropsType = {
    character: CharacterType
}

const CharacterCard: React.FC<CharacterPropsType> = ({character}) => {
    const {id, image, name, gender, species, location, status} = character
    const statusColor = status === 'Alive' ? '#2c7a14' : status === 'Dead' ? '#af3c21' : '#444644'

    return (
        <Link to={`/character/${id}`} style={{textDecoration: 'none'}}>
            <div className={styles.container}>
                <img src={image} alt={name}/>
                <div className={styles.statusWrapper}>
                    <div
                        className={styles.status} style={{backgroundColor: statusColor}}>
                        {status}
                    </div>
                </div>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.info}>
                    <div>gender: {gender}</div>
                    <div>species: {species}</div>
                    <div>location: {location.name}</div>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;