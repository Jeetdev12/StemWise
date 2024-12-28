import { API_OPTIONS } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

    // fetch data from TMDB and update store
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        // console.log("NowPlayingList : ", json.results);
    };
    useEffect(() => {
        if (!nowPlayingMovies) getNowPlayingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useNowPlayingMovies;
