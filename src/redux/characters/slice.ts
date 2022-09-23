import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CharactersResponseType, CharacterType, FilterCharactersType} from './types';
import {api} from '../../api/api';
import {RootState} from '../store';

export const getCharacters = createAsyncThunk('character/getCharacters', async (param, {
    getState,
    rejectWithValue
}) => {
    try {
        const {page, name} = (getState() as RootState).characters.filter
        const {results} = await api.getCharacters({page, name})
        return {characters: results}
    } catch (error) {
        return rejectWithValue(error)
    }
})

const initialState: CharactersResponseType = {
    filter: {
        page: 1,
        name: ''
    },
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: null
    },
    results: [] as CharacterType[],
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        changeCharactersFilter: (state, action: PayloadAction<FilterCharactersType>) => {
            state.filter = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getCharacters.fulfilled, (state, action) => {
            state.results = action.payload.characters
        })
    }
})

export const {changeCharactersFilter} = charactersSlice.actions
export const characters = charactersSlice.reducer