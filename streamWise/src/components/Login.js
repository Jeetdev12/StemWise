//eslint-disable 


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
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"


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
      ).then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: profileURL,
        }).then(() => {
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
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
      }).catch((error) => {
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
    <div className="relative h-screen w-screen overflow-hidden text-white">
      <Header />
      <img
        src={backgroundURL}
        alt="Background"
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      />

      <div className="flex justify-center items-center min-h-screen mt-[5%]">
        <Card className="bg-yellow bg-opacity-70 px-10  max-w-md rounded-xl shadow-xl backdrop-blur-md">
          <CardHeader>
            <CardTitle className ="mb-5" >Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            {/* <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction> */}
            <form
              onSubmit={(e) => e.preventDefault()}
            >
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 mb-4 rounded-md bg-gray-800  border-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              )}

              <input
                ref={email}
                type="email"
                placeholder="Email or mobile number"
                className="w-full p-3 mb-4 rounded-md bg-gray-800 border-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 rounded-md bg-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              {errorMessage && (
                <p className="text-red-400 text-sm mb-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-300 p-3 rounded-md font-semibold"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>

              <p
                className="mt-6 text-center text-sm cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Netflix? Sign Up Now"
                  : "Already registered? Sign In"}
              </p>
            </form>
          </CardHeader>
        </Card>

      </div>
    </div>
  );

};

export default Login;
