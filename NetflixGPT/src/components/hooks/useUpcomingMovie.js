
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../../utils/contants.js';
import { addUpcomingMovie } from '../../utils/movieSlice.js';
const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    const getUpcomingmovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
        const data = await response.json();
        //  console.log(data);
        dispatch(addUpcomingMovie(data.results))

    };

    useEffect(() => {
        getUpcomingmovieData();
    }, [])
}

export default useUpcomingMovies;