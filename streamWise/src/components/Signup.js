import React, { useRef, useState } from "react";
import Header from "./Header";
import { backgroundURL } from "../utils/constants";
import { checkValidData } from "../utils/Validation";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
    );

    if (message) {
      setErrorMessage(message);
      return;
    }

    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${email.current.value}`;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: avatar,
        });
      })
      .then(() => {
        const user = auth.currentUser;

        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );

        navigate("/browse");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <img
        src={backgroundURL}
        alt="bg"
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      />

      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/70 p-10 rounded-xl w-[400px]"
        >
          <h1 className="text-white text-3xl font-bold mb-6">Sign Up</h1>

          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          />

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          />

          <p className="text-red-500 mb-3">{errorMessage}</p>

          <button
            className="w-full bg-red-600 p-3 rounded"
            onClick={handleSignup}
          >
            Sign Up
          </button>

          <p className="text-white mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-red-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;