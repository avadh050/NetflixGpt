
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../../utils/contants.js';
import { addMovie } from '../../utils/movieSlice.js';
const useNowPlayingMovies = () => {

    const dispatch = useDispatch()
    const getmovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
        const data = await response.json();
        //  console.log(data);
        dispatch(addMovie(data.results))

    };

    useEffect(() => {
        getmovieData();
    }, [])
}

export default useNowPlayingMovies;