import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import logoo from "../assets/newLogo.png";

// ShadCN UI
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

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false)
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
        // navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // dispatch(toggleGptSearchView());
    console.log("Button clicked..")
    navigate ("/gptmovies");

  };




  const handleLanguageChange = (value) => {
    dispatch(changeLanguage(value));
  };

  return (
    <header className="fixed top-0 left-0 w-full  shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}

        <Link to='/login'>
          <img src={logoo} alt="App Logo" className="w-10 md:w-20 h-15" />
        </Link>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {user && (
            <>
              {/* Language Selector */}
              {showGptSearch && (
                <Select onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-[130px] bg-gray-800 text-white border border-gray-700">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <SelectItem
                        key={lang.identifier}
                        value={lang.identifier}
                      >
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {/* GPT Toggle Button */}

              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-700"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "Homepage" : "GPT Search"}
              </Button>

              {/* Avatar + Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.photoURL} alt={user.displayName || "User"} />
                    <AvatarFallback>{user.displayName?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;
