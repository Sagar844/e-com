import React from "react";

import { Logout } from "./Logout";
import { MdSecurity } from "react-icons/md";

function Profile(props) {
  return (
    <div className=" p-5 bg-gray-300 flex items-center  justify-center space-y-5">
      <div className="font-bold  text-xl bg-white rounded-md px-20 py-40 ml-10 mr-10">
        <div>
          <MdSecurity className="text-green-400 text-2xl" />
          <span className="text-green-400 text-xl">Powered by Code Yogi </span>
        </div>
        <div className="">
          <div className="flex justify-end mt-5 text-white">
            <Logout></Logout>
          </div>
        </div>
        <div className="">
          {" "}
          {props.name ? `Welcome - ${props.name}` : "Login please-"}
        </div>
        <div className="mt-5">Email- {props.email}</div>
        <div className="mt-5">LastSignInTime-{props.last}</div>
      </div>

      <div></div>
    </div>
  );
}
export default Profile;
