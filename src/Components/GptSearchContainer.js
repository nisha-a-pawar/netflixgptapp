import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constant';
const GptSearchContainer = () => {
  return (
    <div>
       <div className="absolute -z-10">
                <img
                    src={BG_URL}
                    alt="background"
                 
                />
            </div>
       <GptSearchBar/>
       <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchContainer;
