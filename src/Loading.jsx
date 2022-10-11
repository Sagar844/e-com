import React from "react"
import { CgSpinner } from 'react-icons/cg';


function Loading() {

  return (


    <div className="text-blue-500 text-3xl  grow-1 flex items-center mt-52 mb-20 justify-center">

      <CgSpinner className="animate-spin text-4xl" />
    </div>


  );
}
export default Loading;