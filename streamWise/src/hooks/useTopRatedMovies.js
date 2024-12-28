import React, { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utilis/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
        //console.log(json.results);
    };

    useEffect(() => {
        if (!upcomingMovies) getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
