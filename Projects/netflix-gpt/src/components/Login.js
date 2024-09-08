import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/Validation";

const Login = () => {
  const [isSignInForm, setisSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
   const email = useRef(null);
   const password = useRef(null);


  const handleButtonClick = () =>{
  
   
    checkValidData(email.current.value, password.current.value );
    const message =  checkValidData(email.current.value, password.current.value );
    
    setErrorMessage(message);
  }
  const toggleSignInForm = () => {
    setisSignInform(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="bg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-xl bg-opacity-80 text-white ">
        <h1 className=" font-bold text-2xl p-2 m-4 text-white ">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {!isSignInForm && (
          <input
          
            type="text"
            placeholder="Full Name "
            className="p-2 m-2 w-full bg-opacity-35 border-grey-50 bg-yellow-300"
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
        <button className="bg-red-600 px-12 py-2 m-4 w-full " onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
       
       
        <p className="py-4 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Alredy Registered ?Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
