import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ movieId, posterPath, title }) => {
    const navigate = useNavigate();

    if (!posterPath) return null;

    return (
        <div
            onClick={() => navigate(`/movie/${movieId}`)}
            className="relative flex-shrink-0 w-32 md:w-40 lg:w-44 rounded-xl overflow-hidden cursor-pointer group/card transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-black/60"
        >
            <img
                src={IMG_CDN_URL + posterPath}
                alt={title}
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-250 flex flex-col justify-end p-3">
                <p className="text-white text-xs font-semibold line-clamp-2 leading-snug">
                    {title}
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-green-400 transition-colors duration-150">
                        <svg className="w-3 h-3 fill-black ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                    <button className="w-7 h-7 rounded-full bg-white/15 border border-white/30 flex items-center justify-center hover:bg-white/25 transition-colors duration-150">
                        <svg className="w-3 h-3 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-0.5 h-full bg-green-500 scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300 origin-top" />
        </div>
    );
};

export default MovieCard;

