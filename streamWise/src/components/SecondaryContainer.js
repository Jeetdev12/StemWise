import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className='bg-black '>
            <div className='mt-0 md:-mt-52  pl-6md:pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming "} movies={movies.upcomingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Recommended"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming "} movies={movies.upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;
