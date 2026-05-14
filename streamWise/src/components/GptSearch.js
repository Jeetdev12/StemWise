import Header from "./Header";
import MovieCard from "./MovieCard";
import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  API_KEY_URL,
  API_OPTIONS,
  backgroundURL,
} from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { Search, Sparkles } from "lucide-react";

const GptSearch = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langkey = useSelector((store) => store.config.lang);
  const { movieResults, movieName } = useSelector((store) => store.gpt);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(API_KEY_URL);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value?.trim();

    if (!query) return;

    try {
      setLoading(true);

      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const gptQuery = `
      You are a professional Movie Recommendation system.
      Based on the user query: "${query}", suggest 6 highly relevant movies.
      Only return movie names separated by commas.
      `;

      const result = await model.generateContent(gptQuery);
      const text = await result.response.text();

      const gptMovies = text
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean);

      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMDB(movie)
      );

      const tmdbResult = await Promise.all(promiseArray);
      const filteredResults = tmdbResult.filter((arr) => arr[0]);

      dispatch(
        addGptMovieResult({
          movieName: query,
          movieResults: filteredResults,
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Header />

      <div className="fixed inset-0 -z-10">
        <img
          src={backgroundURL}
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      <div className="pt-40 px-4 flex flex-col items-center">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-green-500" size={34} />
            <h1 className="text-4xl md:text-6xl font-bold">
              AI Movie Search
            </h1>
          </div>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl">
            Discover movies with AI-powered recommendations tailored to your mood.
          </p>
        </div>

        <div className="w-full max-w-3xl">
          <div className="flex items-center bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
            <input
              ref={searchText}
              type="text"
              placeholder={lang[langkey].gptSearchPlaceholder}
              className="flex-1 bg-transparent px-6 py-5 text-white placeholder-gray-300 focus:outline-none text-lg"
            />

            <button
              onClick={handleGptSearchClick}
              className="bg-green-600 hover:bg-green-700 px-6 py-5 transition-all duration-300"
            >
              <Search />
            </button>
          </div>
        </div>

        {loading && (
          <div className="mt-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-500"></div>
          </div>
        )}
        {!loading && movieResults?.length > 0 && (
          <div className="mt-16 w-full max-w-7xl">
            <h2 className="text-2xl font-semibold mb-8">
              Results for "{movieName}"
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {movieResults.map(
                (movie, i) =>
                  movie[0]?.poster_path && (
                    <div
                      key={movie[0]?.id || i}
                      className="transform hover:scale-105 transition duration-300"
                    >
                      <MovieCard
                        posterPath={movie[0]?.poster_path}
                        title={movie[0]?.title}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        )}

        {!loading && movieResults?.length === 0 && (
          <div className="mt-24 text-center text-gray-400">
            <p className="text-lg">
              Search for movies using AI recommendations ✨
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default GptSearch;