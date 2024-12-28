import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] md:pt-[10%] px-6 md:px-24  absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-2xl md:text-6xl ">{title}</h1>
            <p className="hidden md:inline-block md:py-6 text-lg w-[40%]">{overview}</p>
            <div className="my-2 md:m-0">
                <button className=" px-3 md:px-8 py-1 md:py-3  text-black bg-white text-xl  opacity-80 rounded-sm">
                    <FontAwesomeIcon icon={faPlay} /> Play
                </button>
                <button className="hidden md:inline-block px-8 py-3  bg-gray-700 text-xl   opacity-80 rounded-sm">
                    <FontAwesomeIcon icon={faCircleInfo} /> More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
