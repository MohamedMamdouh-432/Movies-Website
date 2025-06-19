import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageCount: 0,
    currentPage: 1,
    movies: [],
    movie: {},
    loading: false,
    error: null
};

export const MoviesReducer = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload.results;
            state.pageCount = action.payload.total_pages;
            state.currentPage = action.payload.page;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const { setMovies, setMovie, setLoading, setError } = MoviesReducer.actions;
export default MoviesReducer.reducer;