import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import logoo from "../assets/newLogo.png";

import { Button } from "../components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import GptSearchBar from "./GptSearchBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    navigate(showGptSearch? "/browse":"/gptmovies");
  };

  const handleLanguageChange = (value) => {
    dispatch(changeLanguage(value));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/login" className="flex items-center gap-2">
          <img src={logoo} alt="App Logo" className="w-10 md:w-20 h-auto" />
          <span className="text-white font-bold text-lg md:text-xl hidden sm:block">MovieStream</span>
        </Link>

        {/* Controls */}
        {user && (
          <div className="flex items-center gap-3 sm:gap-5">
            {/* {showGptSearch && <GptSearchBar />} */}

            {showGptSearch && (
              <Select onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[120px] bg-zinc-900 text-white border border-zinc-700 focus:ring-2 focus:ring-green-500">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 text-white border border-zinc-700">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <SelectItem
                      key={lang.identifier}
                      value={lang.identifier}
                      className="hover:bg-zinc-700 focus:bg-zinc-700"
                    >
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700 transition duration-200"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-white/30 hover:ring-green-500 transition duration-300">
                  <AvatarImage
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                  />
                  <AvatarFallback>{user.displayName?.[0] || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-800 text-white border border-zinc-600">
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="hover:bg-red-600 hover:text-white transition"
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
