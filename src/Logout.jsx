import React, { useState } from "react";

import { logout } from "./firebase";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export const Logout = () => {
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  async function handlelogout() {
    if (loading) {
      return <Loading />;
    }
  

    await logout({});
    setLoading(true);
   

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
