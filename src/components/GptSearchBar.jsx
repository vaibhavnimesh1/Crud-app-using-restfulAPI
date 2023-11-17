import { useSelector } from "react-redux";
import LANG from "../utils/langConstant";
import openai from "../utils/openai";
import { useRef } from "react";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const selectedLanguage = useSelector((store) => store.gpt.selectlangValue);

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
      max_tokens: 3000,
      temperature: 0,
    });
    

    console.log(gptResults.choices);
  };
  return (
    <>
      <div className=" relative w-screen   flex justify-center pt-36">
        <form
          className="   bg-black md:z-30 p-3 rounded-xl "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            type="text"
            className=" sm:w-[45.25rem] relative -z-200 outline-none rounded-xl p-3"
            placeholder={LANG?.[selectedLanguage]?.searchBarText}
          />
          <button
            onClick={handleGptSearch}
            className=" p-3 pr-2 ml-2 w-[100px]   justify-center  bg-red-600 rounded-xl text-white font-bold text-lg"
          >
            {LANG?.[selectedLanguage]?.searchButtonText}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
