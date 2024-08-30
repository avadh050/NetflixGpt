
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../../utils/contants.js';
import { addMovie, addTopratedMovie } from '../../utils/movieSlice.js';
const useTopRatedMovie = () => {

    const dispatch = useDispatch()
    const useTopRatedMovie = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
        const data = await response.json();
        //  console.log(data);
        dispatch(addTopratedMovie(data.results))

    };

    useEffect(() => {
        useTopRatedMovie();
    }, [])
}

export default useTopRatedMovie;