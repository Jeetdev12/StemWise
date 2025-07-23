import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { movieName, movieResults } = useSelector((store) => store.gpt);

    if (!movieName || movieName.length === 0) return null;

    return (
        <div className="p-4 md:p-8 bg-gradient-to-b from-black to-gray-900 text-white max-h-[100vh] overflow-y-auto rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 text-center">
                🎬 GPT Recommended Movies
            </h2>

            <div className="">
                {movieName?.map((name, index) => (
                    <div key={name} className="bg-white/5 rounded-lg p-4 md:p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl md:text-2xl font-semibold text-green-300 mb-2">{name}</h3>
                        <MovieList title={null} movies={movieResults[index]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;
