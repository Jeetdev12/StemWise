import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backgroundURL } from "../utilis/constants";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img src={backgroundURL} alt="bg" />
            </div>

            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    );
};
export default GptSearch;
