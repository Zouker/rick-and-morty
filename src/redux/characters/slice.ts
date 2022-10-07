import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CharacterType, FilterCharactersType, Status} from './types';
import {getCharacterById, getCharacters} from './asyncActions';

const initialState = {
    status: Status.LOADING,
    params: {
        page: 1,
        name: ''
    } as FilterCharactersType,
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: null as null | ''
    },
    characters: [] as CharacterType[],
    character: {} as CharacterType
}

const charactersSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        changeCharactersFilter: (state, action: PayloadAction<FilterCharactersType>) => {
            state.params = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getCharacters.pending, (state) => {
            state.status = Status.LOADING;
            state.characters = [];
        })
        builder.addCase(getCharacters.fulfilled, (state, action) => {
            state.characters = action.payload.results;
            state.info = action.payload.info;
            state.status = Status.SUCCESS;
        })
        builder.addCase(getCharacters.rejected, (state) => {
            state.status = Status.ERROR;
            state.characters = [];
        })
        builder.addCase(getCharacterById.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(getCharacterById.fulfilled, (state, action) => {
            state.character = action.payload;
            state.status = Status.SUCCESS;
        })
        builder.addCase(getCharacterById.rejected, (state) => {
            state.status = Status.ERROR;
        })
    }
})

export const {changeCharactersFilter} = charactersSlice.actions
export default charactersSlice.reducer