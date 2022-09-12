import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Loginpage() {
  const navigate = useNavigate();
  const [values, SetValues] = useState({

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
      })
  };


  return (
    <div className=" p-5 bg-gradient-to-r from-indigo-500 h-screen flex items-center  justify-center space-y-5">
      <form
        method="POST"
        className="bg-white px-10 py-20 rounded-md text-center space-y-5 mt-30"
      >
        <label>Email:</label>
        <br></br>
        <input
          placeholder="Enter your email"
          name="email"
          autoComplete="on"
          onChange={(event) =>
            SetValues((prev) => ({ ...prev, email: event.target.value }))
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
            SetValues((prev) => ({ ...prev, password: event.target.value }))
          }
          className="border-2 solid border-orange-500 rounded-md px-16 py-3"
        ></input>
        <br></br> <br></br>
        <div className="text-2xl font-bold text-red-500">{errmes}</div>
        <button
          className="bg-orange-500 text-white py-3 px-5 rounded-md disabled:bg-gray-400" disabled={subtndisable} onClick={handlesubmit}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
