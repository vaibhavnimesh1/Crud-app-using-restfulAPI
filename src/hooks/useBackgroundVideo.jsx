import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addRandomNumber, addTrailerVideo } from "../redux/movieSlice";

const useBackgroundVideo = (Id) => {
  const dispatch = useDispatch();

  const nowPlayinTrailer = async () => {
    const RandomNumb = () => {
      return Math.floor(Math.random(1, 19) * 10);
    };
    dispatch(addRandomNumber(RandomNumb()));
    console.log(RandomNumb());

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${Id}/videos?language=en-US`,
      API_OPTION
    );
    const json = await response.json();
    const data = json.results;
    // console.log(data);
    const filterTrailer = data.filter((video) => video.type == "Trailer");
    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : data[0];
    dispatch(addTrailerVideo(trailer?.key));
  };

  useEffect(() => {
    nowPlayinTrailer();
  }, []);
};

export default useBackgroundVideo;
