import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {

    const { movieName, movieResults } = useSelector((store) => store.gpt)
    return (
        <div className="p-4 m-4 text-white bg-black opacity-90">
            {movieName?.map((movieName, index) => (<MovieList title={movieName} key={movieName} movies={movieResults[index]} />))}
        </div>
    )
}

export default GptMovieSuggestion

