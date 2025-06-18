import { configureStore } from '@reduxjs/toolkit';
import MoviesReducer from '../reducer/movies_reducer';

const store = configureStore({
    reducer: {
        movies: MoviesReducer,
    },
});

export default store;