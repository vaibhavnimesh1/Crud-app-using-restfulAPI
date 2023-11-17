import { addTopRatedVideo } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";

import React from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRatedVideo(json.results));
  };
};

export default useTopRatedMovies;
