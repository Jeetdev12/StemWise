import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backgroundURL } from "../utilis/constants";

const GptSearch = () => {
    return (

        <>
            <div className="fixed  -z-10">
                <img className="h-screen object-cover md: w-screen" src={backgroundURL} alt="bg" />
            </div>
            <div className="fixed mt-[5%] w-full  h-[30%] pt-30%  z-10">
                <GptSearchBar />
            </div>
            <div className="">
                <GptMovieSuggestion />
            </div>
        </>
    );
};
export default GptSearch;
