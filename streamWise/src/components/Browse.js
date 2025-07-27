import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Fetch movie data on mount
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div className="relative w-screen  min-h-screen bg-black text-white">
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/70 to-black/90" />

          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Browse;
