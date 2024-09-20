import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
const Browser = () => {
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/*
            
                  main container
                   - videoBackground
                   - videoTitle
                  secondary container
                   - movieList*n
                     - cards*n 
            
            */}
        </div>
    );
};
export default Browser;
