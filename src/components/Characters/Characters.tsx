import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import CharacterCard from './CharacterCard/CharacterCard';
import {changeCharactersFilter} from '../../redux/characters/slice';
import styles from './Characters.module.scss'
import {Search} from '../../common/Search/Search';
import {useDebounce} from '../../hooks/useDebounce';
import {getCharacters} from '../../redux/characters/asyncActions';
import empty from '../../assets/empty.gif'
import {Pagination} from '../../common/Pagination/Pagination';

const Characters = () => {
    const characters = useAppSelector(state => state.characters.characters)
    const name = useAppSelector(state => state.characters.params.name)
    const status = useAppSelector(state => state.characters.status)
    const page = useAppSelector(state => state.characters.params.page)
    const pages = useAppSelector(state => state.characters.info.pages)
    const next = useAppSelector(state => state.characters.info.next)
    const prev = useAppSelector(state => state.characters.info.prev)
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState(name || '')
    const debouncedValue = useDebounce(searchValue, 750);
    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const onClickPrevPage = () => {
        if (prev !== null) {
            dispatch(changeCharactersFilter({
                name,
                page: Number(prev.replace(/\D/g, ''))
            }))
        }
    }
    const onClickNextPage = () => {
        dispatch(changeCharactersFilter({name, page: Number(next.replace(/\D/g, ''))}))
    }

    useEffect(() => {
        dispatch(changeCharactersFilter({name: debouncedValue, page: 1}))
    }, [changeCharactersFilter, debouncedValue])

    useEffect(() => {
        dispatch(getCharacters())
    }, [getCharacters, name, page])


    return (
        <div className={styles.wrapper}>
            <Search value={searchValue} onChange={onChangeSearchHandler}/>
            {status !== 'loading' && characters.length
                ? <>
                    <div className={styles.container}>
                        {characters?.map(el => <CharacterCard key={el.id}
                                                              character={el}/>)}
                    </div>
                    <Pagination currentPage={page} totalCount={pages}
                                prevPage={onClickPrevPage}
                                nextPage={onClickNextPage}/>
                </>
                : status !== 'loading' && <img src={empty}
                                               alt={'There is nothing here'}/>
            }
        </div>
    );
};

export default Characters;