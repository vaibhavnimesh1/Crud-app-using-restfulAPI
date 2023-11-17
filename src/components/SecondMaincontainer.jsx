import MoviesList from "./MoviesList";
import {  useSelector } from "react-redux";

const SecondMaincontainer = () => {
  const moviesNowPlaying = useSelector((store) => store.movie?.nowPlayingMovies);
  const moviesPopularMovies = useSelector((store) => store.movie?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);

  return (
    <div className=" bg-black mt-8">
      <div className=" -mt-[100px] relative md:z-30">
        <MoviesList title={"Now Playing"} movies={moviesNowPlaying} />
        <MoviesList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MoviesList title={"Popular Movies"} movies={moviesPopularMovies} />
        <MoviesList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondMaincontainer;
