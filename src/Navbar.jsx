import React from "react";
import { Link } from "react-router-dom";
import Sidemenu from "./Sidemenu";
import { FiUsers } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { withCart } from "./withProvider";


function Navbar({ cartCount}) {
  return (
    <div className="bg-white py-3 flex items-center shadow-sm  ">
      <div className="">
        <Link to="/">
          <img
            className="ml-5 hover:blur-sm  w-20"
            src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg" alt="print"
          />
        </Link>
      
       
      </div>


      <div className="  space-x-10 ml-auto hidden sm:flex   ">
        <Link className=" text-xl space-x-2  " to="/Profile">
          <div className="flex text-center">
            <FiUsers className="mt-2 text-green-500 font-bold text-xl " />
            <div className="font-bold text-gray-500 text-xl">
       
            </div>
          </div>
        </Link>
      </div>
    
      <div className=" flex  ml-40  ">
         <Link to="CartPage">
          <BsCartCheck className="text-green-500 text-xl hover:text-orange-500 w-6 " />
         </Link>
        <span className="bg-red-500 text-white rounded-lg px-2 font-bold mr-5  py-0">
        { cartCount }
        </span>
       
      </div>

      <div className=" space-x-5 ml-20 hidden sm:flex"></div>

      <Link
        className="  mr-5 px-3 py-2 ml-2 rounded-md hover:bg-gray-200  hidden  sm:flex"
        to="Login"
      >
  
        Login
      </Link>
      

      <div className="flex sm:hidden ml-40">
        <Sidemenu />
      </div>
    </div>
  );
}

export default withCart (Navbar);
