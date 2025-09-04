import Header from "./Header"
import { backgroundURL, profileURL } from "../utils/constants";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import * as React from "react"
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import MovieCard from "./MovieCard";

import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";


const Home = () => {
  const navigate = useNavigate();

  useTopRatedMovies();

  const user = useSelector((store) => store.user);
  const handleClick = () => {
    if (user) {
      navigate('/browse')
    } else {
      navigate('/login')
    }
  }
  const { movies } = useSelector((store) => store.movies);
  console.log(movies)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center px-4">
        <img
          src={backgroundURL}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Watch anywhere. Cancel anytime.
          </p>
          <div className="mt-8">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300"
              onClick={handleClick}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="relative w-full -mt-1">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,80 C480,0 960,0 1440,80"
            fill="black"
          />
        </svg>
      </section>

      <section className="px-4 md:px-8 pb-16">

        <span className="text-2xl font-semibold">{+ 1}</span>
        <MovieList title={"Trending"} movies={movies?.topRatedMovies} />


      </section>

      <Footer />
    </div>

  )
}



export default Home