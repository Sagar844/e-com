import React, { useState } from 'react'
import Button2 from './Button2';
import { withUser } from './withProvider'
import { Navigate } from 'react-router-dom';
import Loading from './Loading';


const Logout = ({setUser}) => {
  const [loading,setloading] = useState(false)

if(!setUser){
    return <Navigate to="/Login"/>
}
    
    function handlelogout(){
       setloading(true)
        localStorage.removeItem("token");

          setUser(undefined)


    }

    if(loading){
return <Loading></Loading>

    }
  return (
    <div>

<Button2 onClick={handlelogout}>Logout</Button2>
    </div>
  )
}

export default   withUser(Logout)