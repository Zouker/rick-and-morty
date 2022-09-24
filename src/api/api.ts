import axios, {AxiosResponse} from 'axios';
import {
    CharactersResponseType,
    CharacterType,
    FilterCharactersType
} from '../redux/characters/types';

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const api = {
    getCharacters({page, name}: FilterCharactersType) {
        return instance.get<'', AxiosResponse<CharactersResponseType>>(`/character?page=${page}&name=${name}`)
    },
    getCharacterById(id: number | null) {
        return instance.get<'', AxiosResponse<CharacterType>>(`/character/${id}`)
    }
}