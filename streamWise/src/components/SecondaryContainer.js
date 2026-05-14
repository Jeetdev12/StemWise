import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className="relative z-20 mt-32 md:-mt-32 bg-black px-4 md:px-12 lg:px-16 pb-16">

            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />

            <div className="flex flex-col gap-8">
                <MovieList title="Now Playing"  movies={movies.nowPlayingMovies} />
                <MovieList title="Trending"     movies={movies.topRatedMovies} />
                <MovieList title="Popular"      movies={movies.popularMovies} />
                <MovieList title="Upcoming"     movies={movies.upcomingMovies} />
                <MovieList title="Recommended"  movies={movies.popularMovies} />
            </div>

        </div>
    );
}

export default SecondaryContainer;

