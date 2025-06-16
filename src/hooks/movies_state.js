import axios from 'axios';
import { useEffect, useState } from 'react';

export const MoviesState = () => {
    const [movies, setMovies] = useState([])
    const [pageCount, setpageCount] = useState(0)

    const getAllMovies = async () => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2ee990250899858808ca582fd12bc9fc&language=ar")
        setMovies(res.data.results)
        setpageCount(res.data.total_pages)
    }

    const getPage = async (page) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2ee990250899858808ca582fd12bc9fc&language=ar&page=${page}`)
        setMovies(res.data.results)
        setpageCount(res.data.total_pages)
    }

    const search = async (word) => {
        if (word === "") {
            getAllMovies();
        } else {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ee990250899858808ca582fd12bc9fc&query=${word}&language=ar`)
            setMovies(res.data.results)
            setpageCount(res.data.total_pages)
        }
    }

    useEffect(() => getAllMovies(), []);

    return { movies, pageCount, getPage, search };
}