import React from "react";
import lang from "../utilis/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang)
    return (
        <div className="pt-[10%] flex justify-center">
            <form className=" bg-black w-1/2 grid grid-cols-12">
                <input
                    type="text"
                    className=" p-4  m-3 bg-gray-600 rounded-sm col-span-9"
                    placeholder={lang[langkey].gptSearchPlaceholder}
                />
                <button className=" py-0 px-4 ml-0 m-3 rounded-sm bg-red-600 text-white col-span-3" >
                    {lang[langkey].Search}
                </button>
            </form>
        </div >
    );
};

export default GptSearchBar;
