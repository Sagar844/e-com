import React from "react";

import { logout } from "./firebase";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  async function handlelogout() {
    await logout({});

    navigate("/Loginpage");
  }

  return (
    <div>
      <button
        className="bg-green-500 px-2 py-2 rounded-md text-xl  hover:bg-red-500"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
};
