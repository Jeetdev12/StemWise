import { useSelector } from "react-redux";
import MovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    MovieTrailer(movieId);

    return (
        <div className="">
            <iframe

                className="  aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};
export default VideoBackground;
