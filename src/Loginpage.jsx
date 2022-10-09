import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

function Loginpage() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errmes, seterrmes] = useState("");
  const [subtndisable, setbtndisable] = useState(false);

  const handlesubmit = () => {
    if (!values.email || !values.password) {
      seterrmes("fill ALL DATA");
      return;
    }
    seterrmes("");
    setbtndisable(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setbtndisable(false);
     

       navigate("/");
         
      })
      .catch((err) => {
        setbtndisable(false);
        seterrmes(err.message);
      });

    
       
  };

  return (
    <div className=" p-5 bg-[url('https://cdn.discordapp.com/attachments/1001168177952211054/1027213795967385721/cesar-couto-TIvFLeqZ4ec-unsplash.jpg')] bg-cover flex items-center  justify-center space-y-5">
      <form
        method="POST"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-20 rounded-md text-center space-y-5 mt-30"
      >
        <label>Email:</label>
        <br></br>
        <input
          placeholder="Enter your email"
          name="email"
          autoComplete="on"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          className="border-2 solid border-orange-500 rounded-md px-16 py-3"
        ></input>
        <br></br> <br></br>
        <label>Password:</label>
        <br></br>
        <input
          placeholder="Password"
          name="password"
          type="Password"
          autoComplete="on"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          className="border-2 solid border-orange-500 rounded-md px-16 py-3"
        ></input>
        <br></br> <br></br>
        <div className="text-2xl font-bold text-red-500 animate-bounce">
          {errmes}
        </div>
        <button
          className="bg-gray-300 py-3 px-6 rounded-md disabled:bg-blue-600"
          disabled={subtndisable}
          onClick={handlesubmit}
          type="submit"
        >
          Login
        </button>
        <Link
          className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-6 ml-5 py-3 rounded-lg font-bold  text-white"
          to="/Signup"
        >
          Signup
        </Link>
        <Link to="/Forgot">
          <div className="mt-5 text-white font-bold "> Forgot Password ?</div>
        </Link>
      </form>
    </div>
  );
}

export default Loginpage;
