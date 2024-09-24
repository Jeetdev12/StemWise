import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    // fetch data from TMDB and update store
    const getUpcomingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
        console.log("NowPlayingList : ", json.results);
    };
    useEffect(() => {
        getUpcomingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useUpcomingMovies;
