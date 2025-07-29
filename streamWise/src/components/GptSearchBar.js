import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY, API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { Search } from "lucide-react";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langkey = useSelector((store) => store.config.lang);
  const [gptResponse,setGptResponse] = useState([])
  const genAI = new GoogleGenerativeAI(API_KEY);

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
      console.log("gptResponse:",text,result)

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
    <div>
      
    <div
      className="  p-2  z-20 fixed w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-black opacity-70 backdrop-blur-lg  rounded-full shadow-lg max-w-3xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
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
        <Search className="text-green"/>
      </button>
    </div>

     <div>
      <p>{gptResponse}</p>
     </div>

    </div>
  );
};

export default GptSearchBar;
