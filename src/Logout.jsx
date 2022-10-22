import React from 'react'
import Button2 from './Button2';
import { withUser } from './withProvider'
import { Navigate } from 'react-router-dom';


const Logout = ({setUser}) => {

if(!setUser){
    return <Navigate to="/Login"/>
}
    
    function handlelogout(){

        localStorage.removeItem("token");

          setUser(undefined)

    }

  return (
    <div>

<Button2 onClick={handlelogout}>Logout</Button2>
    </div>
  )
}

export default   withUser(Logout)