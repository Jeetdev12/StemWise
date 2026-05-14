import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import logoo from "../assets/newLogo.png";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";

export const ROUTES = {
  HOME: "/home",
  BROWSE: "/browse",
  GPT_MOVIES: "/gptmovies",
  LOGIN: "/login",
  SIGNIN: "/signin",
};

// const GUEST_PATHS = ["/", ROUTES.LOGIN, ROUTES.HOME, ROUTES.SIGNIN];

const pillClass =
  "flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg px-3 py-1.5 text-sm text-white/80 hover:text-white transition-all duration-200 cursor-pointer select-none";


const LanguageSelector = ({ onValueChange }) => (
  <Select onValueChange={onValueChange}>
    <SelectTrigger className={pillClass + " w-auto gap-2"}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <SelectValue placeholder="Language" />
    </SelectTrigger>
    <SelectContent className="bg-zinc-900 text-white border border-white/10 rounded-lg shadow-xl">
      {SUPPORTED_LANGUAGES.map((lang) => (
        <SelectItem
          key={lang.identifier}
          value={lang.identifier}
          className="hover:bg-white/10 focus:bg-white/10 rounded-md"
        >
          {lang.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const GptSearchButton = ({ showGptSearch, onClick }) => (
  <button onClick={onClick} className={pillClass}>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
    <span className={showGptSearch ? "text-white" : "text-white/80"}>
      {showGptSearch ? "← Back" : "GPT Search"}
    </span>
  </button>
);

const UserMenu = ({ user, onSignOut }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button aria-label="Open user menu" className={pillClass + " gap-2"}>
        <Avatar className="w-6 h-6 ring-1 ring-green-500/50">
          <AvatarImage src={user.photoURL} alt={user.displayName || "User"} />
          <AvatarFallback className="text-[10px] bg-green-700 text-white">
            {user.displayName?.[0]?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        {user.displayName && (
          <span className="hidden sm:inline text-white/80 text-sm max-w-[100px] truncate">
            {user.displayName}
          </span>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="end"
      className="bg-zinc-900 text-white border border-white/10 rounded-xl shadow-2xl p-1 min-w-[180px]"
    >
      {user.email && (
        <>
          <div className="px-3 py-2">
            <p className="text-xs text-white/40 truncate">{user.email}</p>
          </div>
          <DropdownMenuSeparator className="bg-white/10" />
        </>
      )}
      <DropdownMenuItem
        onClick={onSignOut}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-red-600/80 hover:text-white transition-colors cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Sign out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const UserControls = ({ user, showGptSearch, onGptSearchClick, onLanguageChange, onSignOut }) => (
  <div className="flex items-center gap-2">
    {showGptSearch && <LanguageSelector onValueChange={onLanguageChange} />}
    <GptSearchButton showGptSearch={showGptSearch} onClick={onGptSearchClick} />
    <UserMenu user={user} onSignOut={onSignOut} />
  </div>
);

const GuestControls = ({ onSignIn }) => (
  <button
    onClick={onSignIn}
    className="bg-green-600 hover:bg-green-500 active:scale-[0.98] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200"
  >
    Sign in
  </button>
);


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, email, displayName, photoURL } = firebaseUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // if (GUEST_PATHS.includes(location.pathname)) {
        //   navigate(ROUTES.BROWSE);
        // }
      } else {
        dispatch(removeUser());
         navigate("/");
        // if (!GUEST_PATHS.includes(location.pathname)) {
        //   navigate("/");
        // }
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = useCallback(() => {
    signOut(auth)
      .then(() => navigate(ROUTES.HOME))
      .catch(() => navigate("/error"));
  }, [navigate]);

  const handleGptSearchClick = useCallback(() => {
    if (!user) {
      navigate(ROUTES.SIGNIN);
      return;
    }
    dispatch(toggleGptSearchView());
    navigate(showGptSearch ? ROUTES.BROWSE : ROUTES.GPT_MOVIES);
  }, [user, showGptSearch, dispatch, navigate]);

  const handleLanguageChange = useCallback(
    (value) => dispatch(changeLanguage(value)),
    [dispatch]
  );

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-white/[0.06]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <div className="flex items-center gap-8">

          <Link
            to={ROUTES.HOME}
            aria-label="Go to home"
            className="flex items-center gap-2.5 group"
          >
            <img
              src={logoo}
              alt="App Logo"
              className="w-8 md:w-9 h-auto transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {user && (
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to={ROUTES.HOME}
                className="text-sm text-white/70 hover:text-green-400 transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                to={ROUTES.BROWSE}
                className="text-sm text-white/70 hover:text-green-400 transition-colors duration-200"
              >
                Browse
              </Link>
            </nav>
          )}
        </div>

        {user ? (
          <UserControls
            user={user}
            showGptSearch={showGptSearch}
            onGptSearchClick={handleGptSearchClick}
            onLanguageChange={handleLanguageChange}
            onSignOut={handleSignOut}
          />
        ) : (
          <GuestControls onSignIn={() => navigate(ROUTES.LOGIN)} />
        )}
      </div>
    </header>
  );
};

export default Header;
