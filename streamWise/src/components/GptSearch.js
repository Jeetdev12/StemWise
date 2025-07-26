import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import MovieCard from "./MovieCard";
import { backgroundURL } from "../utils/constants";

const GptSearch = () => {
    const { movieResults, movieName } = useSelector((store) => store.gpt);

    const hasResults = movieResults?.length > 0;

    return (
        <div className="relative min-h-screen w-full overflow-hidden text-white">
            {/* Header */}
            <Header />

            {/* Background Image */}
            <div className="fixed  inset-0 -z-10">
                <img
                    src={backgroundURL}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
            </div>

            {/* Main Content */}
            <div className="relative z-10   px-6 sm:px-12 overflow-y-hidden scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
                {/* Search Bar */}
                <div className="max-w-4xl mx-auto mb-3 mt-24">
                    <GptSearchBar />
                </div>

                {/* Title */}
                {/* {movieName && (
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Showing results for:{" "}
                        <span className="text-red-400">"{movieName}"</span>
                    </h2>
                )} */}

                {/* Movie Results Grid */}
                {hasResults ? (
                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        {movieResults?.map((group, i) => (
                          group.length>0&&  group?.map((movie) => (movie?.poster_path&&
                                <div
                                    key={movie.id}
                                    className="transform transition duration-300 hover:scale-105 h-50 w-50"
                                >
                                    <MovieCard
                                        posterPath={movie?.poster_path}
                                        title={movie?.title}
                                    />
                                </div>
                            ))
                        )
                        )}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[40vh]">
                        <p className="text-gray-400 text-lg italic">
                            {movieName
                                ? "No results found. Try searching with a different name."
                                : "Start by typing a movie name above..."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GptSearch;
