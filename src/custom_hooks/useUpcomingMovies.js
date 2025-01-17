import { OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", OPTIONS);
        const json = await data.json();
        console.log("upcoming", json);
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])


}

export default useUpcomingMovies;
