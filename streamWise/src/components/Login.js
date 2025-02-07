import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/UserSlice";
import { backgroundURL, profileURL } from "../utilis/constants";

const Login = () => {
  const [isSignInForm, setisSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    checkValidData(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: profileURL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setisSignInform(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="fixed">
        <img className="h-screen w-screen object-cover" src={backgroundURL} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-xl bg-opacity-80 text-white "
      >
        <h1 className=" font-bold text-2xl p-2 m-4 text-white ">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name "
            className="p-2 m-2 w-full bg-opacity-35 border-grey-50 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 m-2 w-full bg-opacity-35 border-grey-50 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-opacity-35 bg-gray-700  border border-gray-500 rounded-md "
        />
        <p className="text-red-200 py-0 px-1  ">{errorMessage}</p>
        <button
          className="bg-red-600 px-12 py-2 my-3 w-full "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to StemWise? Sign Up Now"
            : "Alredy Registered ?Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
