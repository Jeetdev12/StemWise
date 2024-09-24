import React from 'react'
import { IMG_CDN } from '../utilis/constants';

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-40 pr-2   '>
            <img alt='Movie Card' src={IMG_CDN + posterPath} />
        </div>
    );
}

export default MovieCard;
