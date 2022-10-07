import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api/api';
import {RootState} from '../store';
import {FilterCharactersType} from './types';
import {AxiosError} from 'axios';

export const getCharacters = createAsyncThunk('character/getCharacters', async (param, {
    getState,
    rejectWithValue
}) => {
    try {
        const params: FilterCharactersType = (getState() as RootState).characters.params
        const {data} = await api.getCharacters(params)
        return data
    } catch (err) {
        const error = err as AxiosError
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