import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api/api';
import {RootState} from '../store';
import {FilterCharactersType} from './types';

export const getCharacters = createAsyncThunk('character/getCharacters', async (param, {
    getState,
    rejectWithValue
}) => {
    try {
        const params: FilterCharactersType = (getState() as RootState).characters.params
        const {data} = await api.getCharacters(params)
        return {characters: data.results}
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getCharacterById = createAsyncThunk('character/getCharacterById', async (id: number, {rejectWithValue}) => {
    try {
        const {data} = await api.getCharacterById(id)
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})