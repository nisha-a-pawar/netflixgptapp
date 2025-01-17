import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
       <h1 className='text-6xl font-bold pt-20 mx-4 my-2 '>{title}</h1>
       <p className='text-sm font-normal py-4 px-2 m-2 w-1/3  '>{overview}</p>
       <button className='text-black text-lg  bg-white  py-2 px-8 mx-2 rounded-lg  shadow-lg hover:opacity-30'> ▷ Play </button>
       <button className='text-white text-lg bg-gray-500 bg-opacity-50 py-2 px-8 mx-2 rounded-lg  shadow-lg '>More Info i</button>
    </div>
  )
}

export default VideoTitle
