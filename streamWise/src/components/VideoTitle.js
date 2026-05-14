import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
     const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    return (
        <div className="flex flex-col gap-5">

            <span className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Now Playing
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
                {title}
            </h1>

            <p className="text-sm md:text-base text-white/70 leading-relaxed line-clamp-3 max-w-lg drop-shadow-md">
                {overview}
            </p>

            <div className="flex items-center gap-3 mt-2">

                <Link
                to={"https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?&autoplay=1"}
                    target="_blank"
                    // onClick={() => navigate(`/watch/${movieId}`)}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-sm font-bold tracking-wide hover:bg-white/90 active:scale-[0.97] transition-all duration-150 shadow-lg"
                >
                    <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                </Link>

                <button
                    // onClick={() => navigate(`/movie/${movieId}`)}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/15 text-white text-sm font-semibold tracking-wide hover:bg-white/20 active:scale-[0.97] backdrop-blur-sm transition-all duration-150"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    More Info
                </button>

            </div>
        </div>
    );
};

export default VideoTitle;

