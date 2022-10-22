import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="bg-black  px-28 py-1 text-white font-bold rounded-sm hover:bg-red-500 mt-5 "
    ></button>
  );
}

export default Button;
