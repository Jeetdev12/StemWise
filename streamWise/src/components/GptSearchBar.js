import React, { useRef, useState } from "react";
import lang from "../utilis/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY, API_OPTIONS } from "../utilis/constants";
import { addGptMovieResult } from "../utilis/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const langkey = useSelector((store) => store.config.lang);

    // Safely access searchText.current and its value
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=%20The%" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        return json.results;
    };
    const genAI = new GoogleGenerativeAI(API_KEY);

    const handleGptSearchClick = async () => {
        if (!searchText.current.value) {
            console.error("Search input is empty.");
            return;
        }
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 6 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const result = await model.generateContent(gptQuery);
        const text = await result.response.text();
        //const gptMovies = text.split(",");
        const gptMovies = text
            .split(",")
            .map((movie) => movie.trim())
            .filter((movie) => movie.length > 0);

        console.log(gptMovies);
        // setResponse(gptMovies);
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResult = await Promise.all(promiseArray);
        // console.log("tmdb Results :", tmdbResult);
        const filteredResults = tmdbResult.filter(arr => arr[0]);
        console.log("FilterResult :", filteredResults);

        if (filteredResults.length === 0) {
            console.warn("No movie results found.");
        } else {
            dispatch(
                addGptMovieResult({ movieName: gptMovies, movieResults: filteredResults })
            );
        }
    };
    return (
        <div className="sticky top-11 md:top-0 z-10 bg-gradient-to-b from-black to-gray-900 py-11 md:py-6 flex justify-center">
            <form
                className="bg-white rounded-lg shadow-md flex w-[90%] md:w-[60%] lg:w-[40%] overflow-hidden"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="flex-grow px-4 py-2 text-black focus:outline-none"
                    placeholder={lang[langkey].gptSearchPlaceholder}
                />
                <button
                    type="button"
                    onClick={handleGptSearchClick}
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 font-semibold"
                >
                    {lang[langkey].Search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
