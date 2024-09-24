import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    // fetch data from TMDB and update store
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
        console.log("NowPlayingList : ", json.results);
    };
    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default usePopularMovies;
