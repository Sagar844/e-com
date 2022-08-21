import React, { useState } from "react";





function ProductDetails() {


  const [count, setCounter] = useState(1);

  const btn = () => {

    setCounter(count + 1)

    console.log(count)

  }
  const btn2 = () => {

    setCounter(count - 1)

  }



  return (

    <div className="bg-white rounded-lg mt-5 mx-5 p-5 flex gap-5   "> {console.log(count)}
      <div className="w-1/2">
        <img className="" src="https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg" />
      </div>
      <div className="space-y-5   ">
        <h1>Black Printed Coffee Mug</h1>
        <h1>$15.00</h1>
        <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
        <div className="flex space-x-5 ">
          <button className="bg-orange-500 text-white p-3 rounded-md ml-5 disabled:bg-gray-500 " disabled={(count) <= 1} onClick={btn2} > - </button>


          <h1 className="text-5xl text-red-400 border border-green-400 p-1 bg-gray-200">{count} </h1>


          <button className="bg-orange-500 text-white p-2 rounded-md ml-5" onClick={btn} > + Add items</button>
        </div>
      </div>
    </div >



  );





}







export default ProductDetails;