import { useRef } from "react";
import {  useSelector } from "react-redux";
// import {addGptMovieResult} from "../utils/browseSlice";
import { API_OPTION } from "../utils/constant";
import LANG from "../utils/langConstant";
import openai from "../utils/openai";
const GptSecond = () => {
//   const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.gpt.selectlangValue);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const searchValue = searchText?.current?.value;
    // console.log(searchValue);
    if (searchValue) {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchValue +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices?.[0]?.message?.content);
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
    //   dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }
  };

  return (
    <div className="absolute z-30 w-screen pt-[35%] md:pt-[10%] flex justify-center bg-black bg-opacity-70">
      <form
        className="w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 rounded-lg"
          placeholder={LANG?.[selectedLanguage]?.searchBarText}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {LANG?.[selectedLanguage]?.searchButtonText}
        </button>
      </form>
    </div>
  );
};

export default GptSecond;