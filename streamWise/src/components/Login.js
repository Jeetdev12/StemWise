
//eslint-disable

import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { backgroundURL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${email.current.value}`;

    setErrorMessage(message);
    if (message) return;

    setIsLoading(true);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avatar,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL: avatar }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
          setIsLoading(false);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
          setIsLoading(false);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInform(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">

      <img
        src={backgroundURL}
        alt="Background"
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-sm bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-10 shadow-2xl">

          <p className="text-[10px] font-semibold tracking-widest uppercase text-green-400 mb-2">
            {isSignInForm ? "Welcome back" : "Create account"}
          </p>

          <h1 className="text-3xl font-bold text-white tracking-tight mb-1">
            {isSignInForm ? "Sign In" : "Get Started"}
          </h1>

          <p className="text-sm text-white/40 mb-6">
            {isSignInForm
              ? "Enter your credentials to continue"
              : "Join and start streaming today"}
          </p>

          <div className="w-full h-px bg-white/10 mb-6" />

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">

            {!isSignInForm && (
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold tracking-widest uppercase text-white/70">
                  Full Name
                </label>
                <input
                  ref={name}
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                />
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-white/70">
                Email
              </label>
              <input
                ref={email}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-white/70">
                Password
              </label>
              <input
                ref={password}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
              />
            </div>

            {errorMessage && (
              <div className="px-4 py-3 rounded-lg bg-green-950/60 border border-green-500/30 text-green-300 text-xs">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              onClick={handleButtonClick}
              disabled={isLoading}
              className="w-full mt-1 py-3 rounded-lg bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:shadow-lg hover:shadow-green-600/30 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {isLoading && (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                </svg>
              )}
              {isLoading ? "Please wait…" : isSignInForm ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="w-full h-px bg-white/10 mt-7 mb-5" />

          <p
            className="text-center text-xs text-white/80 cursor-pointer select-none"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? (
              <>New here?{" "}<span className="text-green-400 font-medium hover:underline">Create an account →</span></>
            ) : (
              <>Already have an account?{" "}<span className="text-green-400 font-medium hover:underline">Sign in →</span></>
            )}
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;

