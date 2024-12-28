
import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
const Header = () => {
  let btnName = "login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  //if  no dependency array then it will render everytime
  //when depenedency array is empty = useEffect will called initially (just once)
  //if dependency array is [btnNameReact]= useEffect will be called 
  useEffect(() => {
    console.log("useEffect Rendered");
  }, [btnNameReact]);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-md  bg-pink-50 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container ">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex  items-center">
        <ul className="flex p-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4" ><Link to="/" >Home</Link></li>
          <li className="px-4" >
            <a href="/about">About us</a>
          </li>
          <li className="px-4" ><Link to="/contact" >Contact us</Link></li>
          <li className="px-4" ><Link to="/Grocery" >Grocery</Link></li>
          <li className="px-4" >Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login" ?
                setbtnNameReact("Logout") :
                setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
