import { createSlice } from '@reduxjs/toolkit';
import { ExtendedMovie } from '../../types';

interface WatchlistState {
    movies: ExtendedMovie[];
}

const initialState: WatchlistState = {
    movies: [],
};

const watchlist = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        ADD: (state, action) => {
            state.movies.push(action.payload);
        },
        REMOVE: (state, action) => {
            state.movies = state.movies.filter((movie) => movie.url !== action.payload);
        },
    },
});

export const { ADD, REMOVE } = watchlist.actions;

export default watchlist.reducer;
