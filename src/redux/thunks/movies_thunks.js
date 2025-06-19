import axios from 'axios';
import logger from '../../utils/logger';
import { setMovies, setMovie, setLoading, setError } from '../reducer/movies_reducer';

export const getAllMovies = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2ee990250899858808ca582fd12bc9fc&language=ar");
        dispatch(setMovies(res.data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const getMovieDetails = (movieId) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2ee990250899858808ca582fd12bc9fc&language=ar`);
        dispatch(setMovie(res.data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const getPage = (page) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        logger.debug(page);
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2ee990250899858808ca582fd12bc9fc&language=ar&page=${page}`);
        dispatch(setMovies(res.data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const searchMovies = (word) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        let res;
        if (word === "") {
            res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2ee990250899858808ca582fd12bc9fc&language=ar");
        } else {
            res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ee990250899858808ca582fd12bc9fc&query=${word}&language=ar`);
        }
        dispatch(setMovies(res.data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};