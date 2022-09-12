import React from "react"
import { TbFidgetSpinner } from 'react-icons/tb';

function Loading() {

  return (


    <div className="text-green-500 text-3xl  grow-1 flex items-center mt-52 justify-center">

      <TbFidgetSpinner className="animate-spin text-6xl" />
    </div>


  );
}
export default Loading;