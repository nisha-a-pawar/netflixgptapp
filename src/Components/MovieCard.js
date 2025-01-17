import React from 'react'
import { Movie_Poster_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 rounded-lg '>
      <img  className="w-full rounded-lg" src={Movie_Poster_URL+posterPath} alt="Movie Poster" />
    </div>
  )
}

export default MovieCard
