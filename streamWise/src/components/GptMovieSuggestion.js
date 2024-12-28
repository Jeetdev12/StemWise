import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {

    const { movieName, movieResults } = useSelector((store) => store.gpt)
    return (
        <div className="p-4 overflow-y-auto  opacity-90 text-white ">
            {movieName?.map((movieName, index) => (<MovieList title={movieName} key={movieName} movies={movieResults[index]} />))}
        </div>
    )
}
export default GptMovieSuggestion

