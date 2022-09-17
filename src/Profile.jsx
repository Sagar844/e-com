import React from "react";

import { Logout } from "./Logout";

function Profile(props) {
  console.log(props);
  return (
    <div className="bg-gray-300  px-10 py-40 flex justify-center">
      <div className="font-bold  text-3xl bg-white rounded-md px-20 py-40 ml-10 mr-10">
        <div className="">
          <div className="flex justify-end mt-5 text-white">
            <Logout></Logout>
          </div>
        </div>
        {props.name ? `Welcome - ${props.name}` : "Login please-"}
        <div className="mt-5">Email- {props.email}</div>
        <div className="mt-5">LastSignInTime-{props.last}</div>
      </div>

      <div></div>
    </div>
  );
}
export default Profile;
