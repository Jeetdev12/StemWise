import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <div className="group">

            <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-white text-base md:text-lg font-bold tracking-tight">
                    {title}
                </h2>
                <button className="text-green-400 text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-green-300 flex items-center gap-1">
                    See all
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} title={movie.original_title} />
                ))}
            </div>

        </div>
    );
};

export default MovieList;

