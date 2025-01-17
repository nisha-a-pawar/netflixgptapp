import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    return (

        <div className='px-6'>
            <h2 className='text-xl py-2 text-white '>{title}</h2>
            <div className='flex overflow-x-scroll'>
                <div className='flex gap-5'>
                    {
                        movies?.map(movie => {
                            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
                        })
                    }

                </div>
            </div>

        </div>

    );
}

export default MovieList;
