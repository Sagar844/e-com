import React, { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { withAlert } from "./withProvider";
import  Gif from "./Gif"
import Error from "./Error";

const thememap = {
  Success: {
    Svg : Gif,
    bg: "bg-green-600",
  },
  Error: {
    Svg: Error,
    bg: "bg-red-800",
  },
};

function Alert({ alert, removeAlert }) {
  

  useEffect(
    function () {
      if (alert) {
        const timeout = setTimeout(removeAlert, 4 * 1000);

        return function () {
          clearTimeout(timeout);
        };
      }
    },
    [alert]
  );
  
if (!alert) {
    return <></>;
  }
  const { message, type } = alert;
  const { bg,Svg } = thememap[type];

  return (
    <div className="flex items-center  justify-center px-2">
      <div
        role="alert"
        id="alert"
        className={"px-2   shadow-md rounded-md   items-center  " + bg}
      >
        <div className="flex flex-col items-center md:flex-row">
          <div className="mr-3 p-2  rounded md:rounded-tr-none md:rounded-br-none text-white">
          
         <Svg/>
          </div>
          <p className="mr-2 text-base font-bold text-white dark:text-gray-100 mt-2 md:my-0">
            {type}
          </p>
          <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
          <p className="text-sm lg:text-base space-x-3 text-white lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">
            {message}
          </p>
        </div>
        <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">
          <button
            onClick={removeAlert}
            className="focus:outline-none focus:text-gray-400 hover:text-gray-400 text-4xl text-white cursor-pointer dark:text-gray-400"
          >
            <TiDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default withAlert(Alert);
