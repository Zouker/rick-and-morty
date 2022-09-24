import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import CharacterCard from './CharacterCard/CharacterCard';
import {changeCharactersFilter} from '../../redux/characters/slice';
import styles from './Characters.module.scss'
import {Search} from '../Search/Search';
import {useDebounce} from '../../hooks/useDebounce';
import {getCharacters} from '../../redux/characters/asyncActions';

const Characters = () => {
    const characters = useAppSelector(state => state.characters.characters)
    const name = useAppSelector(state => state.characters.params.name)
    const dispatch = useAppDispatch()

    const [searchValue, setSearchValue] = useState(name || '')
    const debouncedValue = useDebounce(searchValue, 750);
    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    useEffect(() => {
        dispatch(changeCharactersFilter({name: debouncedValue, page:1}))
    }, [changeCharactersFilter, debouncedValue])

    useEffect(() => {
        dispatch(getCharacters())
    }, [getCharacters, name])

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