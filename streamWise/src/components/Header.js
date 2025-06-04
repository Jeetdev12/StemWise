import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/UserSlice";
import { SUPPORTED_LANGUAGES } from "../utilis/constants";
import { toggleGptSearchView } from "../utilis/gptSlice";
import lang from "../utilis/languageConstants";
import { changeLanguage } from "../utilis/configSlice";
import logo from "../assets/logoo.png"

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        // Insubscribe when component unmounts
        return () => unsubscribe();
    }, []);
    const handleGptSearchClick = () => {
        //toggle GPT search
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    return (
        <header className="fixed top-0 left-0 w-full bg-[#0f172a] shadow-lg z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="logo" className="w-40" />
                </div>

                {/* Right Controls */}
                {user && (
                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        {showGptSearch && (
                            <select
                                onChange={handleLanguageChange}
                                className="p-2 bg-gray-800 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                {SUPPORTED_LANGUAGES.map((lang) => (
                                    <option key={lang.identifier} value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        )}

                        {/* GPT Toggle */}
                        <button
                            onClick={handleGptSearchClick}
                            className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition duration-200"
                        >
                            {showGptSearch ? "Homepage" : "GPT Search"}
                        </button>

                        {/* Profile Image */}
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="hidden md:block w-10 h-10 rounded-full border-2 border-green-500"
                        />

                        {/* Sign Out Button */}
                        <button
                            onClick={handleSignOut}
                            className="text-white font-semibold text-sm hover:underline"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </header>
    );

};

export default Header;
