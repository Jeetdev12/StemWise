import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    if (!movies) return null;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie || {};

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">

            <div className="absolute inset-0 w-full h-full z-0">
                <VideoBackground movieId={id} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />

            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />

            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

            <div className="absolute inset-0 z-20 flex items-center">
                <div className="px-8 md:px-16 lg:px-24 max-w-2xl">
                    <VideoTitle movieId={id} title={original_title} overview={overview} />
                </div>
            </div>

        </div>
    );
}

export default MainContainer;

