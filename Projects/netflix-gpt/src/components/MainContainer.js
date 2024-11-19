import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    // console.log("Movies :", movies)
    <title>Project</title>
    if (!movies) return;
    const mainMovie = movies[0];
    // console.log("BackGround Video:", mainMovie)

    const { original_title, overview, id } = mainMovie || {};

    return (
        <div className='pt-[20%] bg-black md:pt-0 z-10'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;
