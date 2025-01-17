import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie)


  return (

    movie && (
      <div className='bg-black'>
        <div className='-mt-44 z-20 pl-12 relative'>

          <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movie.popularMovies} />
          <MovieList title={"Top Rated"} movies={movie.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movie.upcomingMovies} />

        </div>
      </div>

    )
  )
}

export default SecondaryContainer
