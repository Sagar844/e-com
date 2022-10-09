import React from "react";
import { Link } from "react-router-dom";
import Sidemenu from "./Sidemenu";
import { FiUsers } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import  PopupGfg from "./PopupGfg"

function Navbar(props) {
  return (
    <div className="bg-white py-4 flex items-center shadow-sm  ">
      <div className="">
        <Link to="/">
          <img
            className="ml-5  w-30"
            src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          />
        </Link>
       
      </div>
 
      <div className="  space-x-10 ml-auto hidden sm:flex   ">
        <Link className=" text-xl space-x-2  " to="/Profile">
          <div className="flex text-center">
            <FiUsers className="mt-2 text-green-500 font-bold" />
            <div className="font-bold text-gray-500 text-xl">
              {props.name ? ` ${props.name}` : ""}
            </div>
          </div>
        </Link>
      </div>
      <div className="ml-5">
 < PopupGfg />
 </div>
      <div className=" flex  ml-40  ">
        <Link to="Cart">
          <BsCartCheck className="text-green-500 text-3xl hover:text-orange-500" />
        </Link>
        <span className="bg-blue-400 text-white rounded-full px-2 mr-5 py-1">
          {props.Productcount}
        </span>
      </div>

      <div className=" space-x-5 ml-20 hidden sm:flex">
      
      </div>

      <Link
        className="  mr-5 px-6 py-2 ml-2 rounded-md hover:bg-gray-200  hidden  sm:flex"
        to="Loginpage"
      >
        {" "}
        Login
      </Link>
      <div className="flex sm:hidden ml-40">
        <Sidemenu />
      </div>
    </div>
  );
}

export default Navbar;
