import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useEffect, useState } from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { addSelectlangValue, addgptSearchbrowse } from "../redux/gptSlice";
// import GptSearchBar from "./GptSearchBar";
import { SUPPORTED_LANGUAGES } from "../utils/langConstant";
import SideMenuBar from "./SideMenuBar";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [showCross, setshowCross] = useState(true);

  const user = useSelector((store) => store.user);
  const GptSearchState = useSelector((store) => store.gpt.gptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleMenu = () => {
    setshowMenu(!showMenu);
    setshowCross(true);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleshowCross = () => {
    setshowCross(false);
    setshowMenu(false);
  };
  const handleGptSearch = () => {
    dispatch(addgptSearchbrowse());
    setshowCross(false)
    setshowMenu(false)
  };
  const handleSelectLang = (e) => {
    dispatch(addSelectlangValue(e.target.value));
  };

  return (
    <>
      <div className=" md:mb-10  absolute z-10 md:flex lg:flex  justify-between w-full  bg-gradient-to-b from-black">
        {
          <img
            className=" md:w-[15rem] w-[10rem]  md:px-8 py-1  "
            src={LOGO}
            alt="logo"
          />
        }
        {!showMenu ? (
          <div
            onClick={handleMenu}
            className=" cursor-pointer float-right absolute top-5  sm:hidden right-8  text-white font-bold text-3xl"
          >
            ☰
          </div>
        ) : (
          <>
            {showCross && (
              <div className=" absolute ">
                <ul className=" fixed z-1000 gap-4 pt-10 pl-5 text-2xl h-screen   font-bold text-white bg-black bg-opacity-70  flex flex-col right-0 top-0  w-[60%]">
                  <div className=" flex  border-b-2 border-white justify-between pr-4">
                    
                    <li className=" mt-12 cursor-pointer">Home</li>
                    <li className="cursor-pointer absolute top-5 right-9  " onClick={handleshowCross}>
                      X
                    </li>
                  </div>
                  <div className=" ">
                  <li   onClick={handleGptSearch} className="border-b-2 mb-3 cursor-pointer border-white">Gpt Search</li>
                  <li   onClick={() => handleSignOut()} className="border-b-2 cursor-pointer border-white">Sign Out</li>
                  </div>
                </ul>
              </div>
            )}
          </>
        )}
        {user && (
          <div className="  flex md:gap-4 gap-1 cursor-pointer justify-between px-5 items-center">
            {
              <>
                {GptSearchState && (
                  <select
                    onChange={handleSelectLang}
                    className=" bg-black p-2 text-white font-bold text-xl border-white outline-none cursor-pointer"
                  >
                    {SUPPORTED_LANGUAGES.map((option) => (
                      <option
                        key={option?.identifier}
                        value={option?.identifier}
                      >
                        {option?.name}
                      </option>
                    ))}
                  </select>
                )}

                <button
                  className=" bg-red-800  w-24  hidden  sm:block  text-white font-bold   p-2 rounded-lg"
                  onClick={handleGptSearch}
                >
                  {!GptSearchState ? "GptSearch" : "HomePage"}
                </button>
              </>
            }

            <img
              className="  w-10 h-10 hidden  md:block rounded-lg "
              src={USER_AVATAR}
              alt="user"
            />
            <h1
              onClick={() => handleSignOut()}
              className=" whitespace-nowrap cursor-pointer  hidden  sm:block  bg-yellow-500 rounded-lg  p-1 md:p-2 hover:text-black  justify-center text-white font-bold "
            >
              (Sign Out)
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
