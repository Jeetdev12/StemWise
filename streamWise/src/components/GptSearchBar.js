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
        <div className="sticky top-0 z-10 pt-[30%] md:pt-[5%] flex justify-center">
            <form
                className="mx-4  bg-black   w-full md:w-1/2 grid grid-cols-12"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 m-2 text-black  bg-white rounded-md col-span-9"
                    placeholder={lang[langkey].gptSearchPlaceholder}
                />
                <button
                    className="py-0 px-4 ml-0 m-2 rounded-lg bg-green-700 text-white col-span-3"
                    onClick={handleGptSearchClick}
                >
                    {lang[langkey].Search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
