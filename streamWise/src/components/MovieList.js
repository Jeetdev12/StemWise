import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    //console.log("movieList :", movies);
    return (
        <div className=" w-screen bg-black   text-white z-10">
            <h1 className=" mx-8  mt-3 text-xl md:text-3xl font-semibold mb-1 font-anton uppercase tracking-wide ">{title}</h1>
            <div className="flex no-scrollbar overflow-x-scroll mx-5">
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
