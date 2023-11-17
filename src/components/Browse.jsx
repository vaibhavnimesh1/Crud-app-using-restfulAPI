import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondMaincontainer from "./SecondMaincontainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const GptSearchState = useSelector((store) => store.gpt.gptSearch);

  return (
    <div className=" w-screen ">
      <Header />
      {GptSearchState ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondMaincontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
