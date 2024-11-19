import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    //console.log("movieList :", movies);
    return (
        <div className="  px-8 bg-black   text-white z-10">
            <h1 className=" test-xl md:text-3xl px-2 py-4">{title}</h1>
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
