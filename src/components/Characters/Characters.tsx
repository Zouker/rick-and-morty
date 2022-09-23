import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import CharacterCard from './CharacterCard/CharacterCard';
import {changeCharactersFilter, getCharacters} from '../../redux/characters/slice';
import styles from './Characters.module.scss'
import {Search} from '../Search/Search';
import {useDebounce} from '../../hooks/useDebounce';

const Characters = () => {
    const characters = useAppSelector(state => state.characters.results)
    const name = useAppSelector(state => state.characters.filter.name)
    const dispatch = useAppDispatch()

    const [searchValue, setSearchValue] = useState(name || '')
    const debouncedValue = useDebounce(searchValue, 750);
    console.log(debouncedValue)
    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    useEffect(() => {
        changeCharactersFilter({name: debouncedValue})
    }, [changeCharactersFilter, debouncedValue])

    useEffect(() => {
        dispatch(getCharacters())
    }, [getCharacters])

    return (
        <div className={styles.wrapper}>
                <Search value={searchValue} onChange={onChangeSearchHandler}/>
            <div className={styles.container}>
                {characters?.map(el => <CharacterCard key={el.id} character={el}/>)}
            </div>
        </div>
    );
};

export default Characters;