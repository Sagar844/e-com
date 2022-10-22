import React, { useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { TiDelete } from "react-icons/ti";
import { withAlert } from "./withProvider";

const thememap = {
  success: {
    Icon: BsFillPatchCheckFill,
    bg: "bg-green-600",
  },
  error: {
    Icon: CgDanger,
    bg: "bg-red-600",
  },
};

function Alert({ alert, removeAlert }) {
  

  useEffect(
    function () {
      if (alert) {
        const timeout = setTimeout(removeAlert, 3 * 1000);

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
  const { bg, Icon } = thememap[type];

  return (
    <div className="flex items-center justify-center px-2">
      <div
        role="alert"
        id="alert"
        className={"px-8 py-2   shadow-md rounded-md   items-center  " + bg}
      >
        <div className="flex flex-col items-center md:flex-row">
          <div className="mr-3 p-4  rounded md:rounded-tr-none md:rounded-br-none text-white">
            <Icon className="text-white text-xl"></Icon>
          </div>
          <p className="mr-2 text-base font-bold text-white dark:text-gray-100 mt-2 md:my-0">
            {type}
          </p>
          <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
          <p className="text-sm lg:text-base text-white lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">
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
