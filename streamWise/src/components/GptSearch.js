import Header from "./Header";
import MovieCard from "./MovieCard";
import { backgroundURL } from "../utils/constants";
import Footer from "./Footer";
import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY, API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { Search } from "lucide-react";

const GptSearch = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const langkey = useSelector((store) => store.config.lang);
    //   const [gptResponse,setGptResponse] = useState([])
    const genAI = new GoogleGenerativeAI(API_KEY);
    const { movieResults, movieName } = useSelector((store) => store.gpt);

    const hasResults = movieResults?.length > 0;


    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
        const query = searchText.current?.value?.trim();
        if (!query) return;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const gptQuery =
            `You are a professional Movie Recommendation system. Based on the user query: "${query}", suggest 6 highly relevant movies.` +
            `\n\nGuidelines:` +
            `\n- Choose movies that best match the user's interest.` +
            `\n- Prioritize critically acclaimed or popular titles (unless the query asks for underrated/gems).` +
            `\n- Avoid recommending sequels or similar-titled films unless clearly asked.` +
            `\n- Be genre-aware: match the query tone (comedy, thriller, sci-fi, etc.).` +
            `\n- Only return movie names, strictly comma-separated with no additional explanation.` +
            `\n\nExample Output: The Dark Knight, Inception, Fight Club, The Matrix`;


        const result = await model.generateContent(gptQuery);
        const text = await result.response.text();

        const gptMovies = text
            .split(",")
            .map((movie) => movie.trim())
            .filter((movie) => movie.length > 0);
        console.log("gptResponse:", text, result)

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResult = await Promise.all(promiseArray);
        console.log(tmdbResult)
        const filteredResults = tmdbResult.filter((arr) => arr[0]);
        //  setGptResponse(tmdbResult)
        dispatch(
            addGptMovieResult({ movieName: query, movieResults: filteredResults })
        );
    };
    return (
        <div >
            {/* Header */}
            <Header />
            <div className=" min-h-screen  text-white">
                {/* Background Image */}
                <div className="fixed  inset-0 -z-10">
                    <img
                        src={backgroundURL}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-60" />
                </div>
                <div className="flex items-center justify-center  mt-36 z-30">
                    <div className="px-5 w- p-2 bg-black fixed flex flex-col sm:flex-row items-center justify-center rounded-full opacity-70 hover:opacity-80"
                    >
                        <input
                            ref={searchText}
                            type="text"
                            className="w-full bg-transparent ml-2 px-4 py-3 rounded-full text-white focus:outline-none "
                            placeholder={lang[langkey].gptSearchPlaceholder}
                        />
                        <button
                            type="button"
                            onClick={handleGptSearchClick}
                            className=" hover:bg-gray-400 text-white px-6 py-3 rounded-full font-semibold transition-all"
                        >
                            <Search className="text-green" />
                        </button>
                    </div></div>
                <div className="mt-[15%] grid gap-2 sm:grid-cols-2 md:grid-cols-6 ">
                    {movieResults?.map((movie, i) => (movie[0]?.poster_path &&
                        <div
                            key={movie[0]?.id || i}
                            className="transform transition duration-300 hover:scale-[1.1] h-full w-full"
                        >
                            <MovieCard
                                posterPath={movie[0]?.poster_path || ''}
                                title={movie[0]?.title || 'Bahubali'}
                            />
                        </div>
                    )
                    )}
                </div>
                {/* Movie Results Grid */}
                {hasResults ? (
                    <div className="mt-[15%] grid gap-2 sm:grid-cols-2 md:grid-cols-6 ">
                        {movieResults?.map((movie, i) => (movie[0]?.poster_path &&
                            <div
                                key={movie[0]?.id || i}
                                className="transform transition duration-300 hover:scale-[1.1] h-full w-full"
                            >
                                <MovieCard
                                    posterPath={movie[0]?.poster_path || ''}
                                    title={movie[0]?.title || 'Bahubali'}
                                />
                            </div>
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
            <Footer />
        </div>
    );
};

export default GptSearch;
