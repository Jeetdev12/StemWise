import Header from "./Header"
import { backgroundURL, profileURL } from "../utils/constants";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black  ">
      <Header />

      <section className="relative min-h-screen  text-white overflow-hidden">
        <img
          src={backgroundURL}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 opacity-40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-[15%]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
            Unlimited movies, TV shows, and more
          </h1>

          <div className="mt-6 flex flex-col md:justify-center sm:flex-row items-center gap-4 w-full max-w-2xl px-4">

            <Button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-md transition-all duration-300" onClick={()=>navigate('/browse')}>
              Get Started
            </Button>
          </div>
        </div>

        {/* <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full"
          >
            <defs>
              <linearGradient id="curve-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff0055" />
                <stop offset="100%" stopColor="#ff3366" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 C480,0 960,0 1440,100"
              fill="none"
              stroke="url(#curve-stroke)"
              strokeWidth="4"
            />
          </svg>
        </div> */}
      </section>


      {/* <section className="relative w-full ">
        <svg
          viewBox="0 0 1440 100"
          className="w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="stroke-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0055" />
              <stop offset="100%" stopColor="#ff3366" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C480,0 960,0 1440,100"
            fill="none"
            stroke="url(#stroke-gradient)"
            strokeWidth="3"
          />
        </svg>

      </section> */}

      {/* <Footer /> */}
    </div>
  )
}



export default Home