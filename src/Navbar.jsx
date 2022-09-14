import React from 'react';
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';

import { BsCartCheck } from 'react-icons/bs';

function Navbar({ Productcount }) {
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

      <div className="flex   space-x-10 ml-auto hidden sm:flex   ">
        <Link className="text-xl " to="/Profile">
          Profile
				</Link>
      </div>
      <div className=" flex justify-center ml-20   ">
        <Link to="Cart">
          <BsCartCheck className="text-green-500 text-3xl hover:text-orange-500" />
        </Link>
        <span className="bg-blue-400 text-white rounded-full px-2 mr-5 py-1">
          {Productcount}
        </span>

      </div>

      <div className=" space-x-5 ml-20 hidden sm:flex">
        <Link
          className="bg-orange-500 px-3 py-3 rounded-lg hover:bg-indigo-400  text-white"
          to="/Signup"
        >
          Signup
				</Link>
      </div>

      <Link
        className="bg-green-500 px-3 py-3 ml-2 rounded-lg hover:bg-indigo-500  hidden sm:flex text-white"
        to="Loginpage"
      >
        {' '}
        Login
				</Link>
      <div className="flex sm:hidden ml-40"
      >
        <Sidemenu />
      </div>
    </div>
  );
}

export default Navbar;
