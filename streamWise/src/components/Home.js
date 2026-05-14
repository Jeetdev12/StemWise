import Header from "./Header";
import Browse from "./Browse";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import HeroSection from "./HeroSection";

const CurveDivider = () => (
  <div className="relative -mt-1 w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="w-full h-20"
    >
      <path d="M0,80 C480,0 960,0 1440,80" fill="black" />
    </svg>
  </div>
);


const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useTopRatedMovies();

  const handleGetStarted = () => {
    navigate(user ? "/browse" : "/login");
  };

  // Inside Home.js
  const handleClick = () => {
    console.log("Button clicked");
    if (user) {
      navigate("/gptmovies");
    } else {
      navigate("/login");
    }
  };


  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <Header />

      <HeroSection handleBtnClick={handleClick} onGetStarted={handleGetStarted} />

      <CurveDivider />

      <section>
        <Browse />
      </section>

    </div>
  );
};

export default Home;
