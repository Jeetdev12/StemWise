import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import MovieCard from "./MovieCard";
import { backgroundURL } from "../utils/constants";
import Footer from "./Footer";

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
            <div className="relative z-10   px-6 sm:px-8 overflow-y-hidden scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
                {/* Search Bar */}
                <div className="max-w-4xl mx-auto mb-3 mt-24">
                    <GptSearchBar />
                </div>


                {/* Movie Results Grid */}
                {hasResults ? (
                    <div className="mt-[15%] grid gap-2 sm:grid-cols-2 md:grid-cols-6 bg-black opacity-80">
                        {movieResults?.map((group, i) => (
                          group.length>0&&  group?.map((movie) => (movie?.poster_path&&
                                <div
                                    key={movie.id}
                                    className="transform transition duration-300 hover:scale-[1.1] h-full w-full"
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
            <Footer/>
        </div>
    );
};

export default GptSearch;
