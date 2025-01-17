import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../custom_hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../custom_hooks/usePopularMovies';
import useTopRatedMovies from '../custom_hooks/useTopRatedMovies';
import useUpcomingMovies from '../custom_hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearchContainer';

const Browse = () => {
  const searchGpt = useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className=''>
      <Header />
      {
        searchGpt ?
       <GptSearch/> :

          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }


    </div>
  )
}

export default Browse
