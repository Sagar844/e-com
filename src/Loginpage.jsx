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
    <div className=" p-5 bg-gray-100">
      <form method="POST" className="  rounded-md text-center space-y-5 mt-10">
        <div className="text-black font-bold text-xl ">
          YOUR ACCOUNT FOR <br></br>EVERYTHING PRINT
        </div>
        <br></br>
        <input
          placeholder=" Email address"
          name="email"
          autoComplete="on"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          className="border  bg-transparent rounded-sm font-bold px-10 py-1"
        ></input>
      
        <br></br>
        <input
          placeholder="Password"
          name="password"
          type="Password"
          autoComplete="on"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          className="border font-bold  rounded-sm px-10 py-1"

        ></input>
        <Link to="/Forgot">
          <div className="mt-5 text-gray-400 mr-5 font-bold "> Forgot Password ?</div>
        </Link>

        <button
          className="bg-black  px-28 py-1 text-white font-bold rounded-sm disabled:bg-blue-600"
          disabled={subtndisable}
          onClick={handlesubmit}
          type="submit"
        >
          Login
        </button>
        <br></br> <br></br>
        <div className="text-2xl font-bold text-red-500 animate-bounce">
          {errmes}
        </div>
       
        <span> Not a Member?</span>
        <Link
          className=" "
          to="/Signup"
        >
          Signup
        </Link>
      </form>
    </div>
  );
}

export default Loginpage;
