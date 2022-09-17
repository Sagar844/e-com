import React from "react";
import { Link } from "react-router-dom";
import Sidemenu from "./Sidemenu";
import { FiUsers } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";

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
      <div className=" flex  ml-40  ">
        <Link to="Cart">
          <BsCartCheck className="text-green-500 text-3xl hover:text-orange-500" />
        </Link>
        <span className="bg-blue-400 text-white rounded-full px-2 mr-5 py-1">
          {props.Productcount}
        </span>
      </div>

      <div className=" space-x-5 ml-20 hidden sm:flex">
        <Link
          className="bg-orange-500 px-3 py-3 rounded-lg hover:bg-indigo-400 font-bold  text-white"
          to="/Signup"
        >
          Signup
        </Link>
      </div>

      <Link
        className="bg-blue-600 mr-5 px-3 py-3 ml-2 rounded-lg hover:bg-indigo-500  hidden font-bold sm:flex text-white"
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
