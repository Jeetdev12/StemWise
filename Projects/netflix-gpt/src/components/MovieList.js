import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log("movieList :", movies);
    return (
        <div className="  px-8 text-white ">
            <h1 className="text-3xl px-2 py-4">{title}</h1>
            <div className="flex no-scrollbar overflow-x-scroll ">
                <div className="flex ">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
