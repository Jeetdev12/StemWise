import { signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")

        });
    }


    return (
        <div className=' absolute w-screen px-8  bg-gradient-to-tr from-black z-10 flex justify-between'>
            <img className="w-44 "
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo' />

            {user && <div className="  flex p-2  ">
                <img
                    className="w-12 h-12 rounded-md "
                    alt="usericon"
                    src={user.photoURL}
                />
                <button className="font-bold p-2" onClick={handleSignOut}>
                    (Sign Out )
                </button>
            </div>}
        </div>


    )
}

export default Header;
