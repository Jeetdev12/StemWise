import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 - absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-6xl ">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="">
                <button className="m-1 px-8  p-2 text-black bg-white text-xl  opacity-80 rounded-sm">
                    {" "}
                    <FontAwesomeIcon icon={faPlay} /> Play
                </button>
                <button className="m-1 px-8 py-2 text-white bg-gray-700 text-xl   opacity-80 rounded-sm">
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> More Info{" "}
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
