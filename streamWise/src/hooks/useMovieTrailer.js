import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addTrailerVideo } from "../utilis/movieSlice";
import { useEffect } from "react";

const MovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo)
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        // console.log("bgVideo :", json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        // console.log("filterData :", filterData);
        const trailer = filterData.length ? filterData[0] : json.results[0];

        // console.log("trailer:", trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        if (!trailerVideo) getMovieVideos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
export default MovieTrailer;
