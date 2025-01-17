import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
    // Check if movies are undefined or empty
    if (!movies || movies.length === 0) {
        console.log('No movies available');
        return <div>No movies available to display.</div>; // Fallback UI
    }
    const bgMovie = movies[0];
    console.log("first movie", bgMovie);

    const { id, original_title, overview } = bgMovie;
    return (
        <div className="">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />


        </div>
    )
}

export default MainContainer;
