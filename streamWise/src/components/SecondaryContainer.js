import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
            <div className='mt-0 md:-mt-52 w-full pl-6 md:p-0 relative absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 '>
               
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming "} movies={movies.upcomingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Recommended"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming "} movies={movies.upcomingMovies} />
            </div>
    )
}

export default SecondaryContainer;
