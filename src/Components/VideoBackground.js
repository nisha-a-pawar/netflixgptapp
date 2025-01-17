import {  useSelector } from 'react-redux'
import useMovieTrailer from '../custom_hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo)
  useMovieTrailer(movieId);
  return (
    <div className=" w-screen h-1/2 overflow-hidden">
    <iframe
      className="w-screen aspect-video -mt-24"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?rel=0&autoplay=1&mute=1&playsinline=1&controls=0&showinfo=0&modestbranding=1"
        
      }
      allowFullScreen
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    ></iframe>
  </div>
  );
};

export default VideoBackground
