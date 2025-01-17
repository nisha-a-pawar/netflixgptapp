import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
   const langKey = useSelector(store =>store.config.lang)
    return (
        <div className='p-[10%]'>
            <form className='bg-black grid grid-cols-12' >
                <input type='text' className='col-span-9 p-4 m-4 border-gray-400 ' placeholder={lang[langKey].GptSearchPlaceHolder} />
                <button className='col-span-3 m-4 px-2 py-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
            </form>

        </div>
    );
};

export default GptSearchBar;
