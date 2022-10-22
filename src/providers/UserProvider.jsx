import axios from "axios";
import React, { useState, useEffect } from "react";
import { UserContext } from "../Contexts";
import Loading from "../Loading";


function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setloading] = useState(true);


  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setloading(false)
       
        })
        .catch(() => {
          localStorage.removeItem("token");
          setloading(false)
        });
    } else {
      setloading(false)
    }
  }, []);
   
  if(loading){
return <Loading></Loading>

  }


  return (
    <UserContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;




