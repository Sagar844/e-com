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
      <button>
   <img  onClick={handlelogout} src="https://cdn.discordapp.com/attachments/1001168177952211054/1029091825098707014/icons8-logout-48.png" alt="" />
     </button> 
   
    </div>
  );
};
