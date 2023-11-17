import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcomingVideo } from "../redux/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "        https://api.themoviedb.org/3/movie/upcoming",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpcomingVideo(json.results));
  };
};

export default useUpcomingMovies;
