import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/UserSlice";
import { logoURL, SUPPORTED_LANGUAGES } from "../utilis/constants";
import { toggleGptSearchView } from "../utilis/gptSlice";
import lang from "../utilis/languageConstants";
import { changeLanguage } from "../utilis/configSlice";

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
        dispatch(changeLanguage(e.target.value))
    }

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    return (
        <div className=" absolute w-screen px-8  bg-gradient-to-bl from-black z-10 flex justify-between">
            <img className="w-44 " src={logoURL} alt="logo" />
            {user && (
                <div className="  flex p-2  ">
                    {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onClick={handleLanguageChange} >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>)}
                    <button
                        className="py-2 px-4 my-2 mx-4 bg-red-600 text-white rounded-sm"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Homepage" : "GPT Search"}
                    </button>
                    <img
                        className="w-12 h-12 rounded-md "
                        alt="usericon"
                        src={user.photoURL}
                    />
                    <button className="font-bold text-white p-2" onClick={handleSignOut}>
                        (Sign Out )
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
