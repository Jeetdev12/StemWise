import Header from "./Header"
import { backgroundURL, profileURL } from "../utils/constants";



const Home = ()=>{

    return(
        <div className="bg-black-200">
          <Header />
      <img
        src={backgroundURL}
        alt="Background"
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      />
        </div>
    )
}



export default Home