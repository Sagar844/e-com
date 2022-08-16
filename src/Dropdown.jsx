import React from 'react'

function Dropdown() {
  return (
    <div className="flex h-32 w-full">

      <div className="ml-24 hidden sm:flex lg:flex-col   ">

        <h1 className="text-gray-400"> Home / Shop</h1>
        <h1 className="text-3xl text-orange-500 mt-2">Shop</h1>
        <h1 className="mt-5">Showing 1–9 of 11 results</h1>
      </div>
      <div className="ml-auto mt-auto mr-40 mb-10 sm:flex text-center  ">
        <select className=" rounded-sm border-2 ">
          <option> Default Sorting </option>
          <option>Short by Popularity</option>
          <option>Short by Average Rating</option>
          <option>Short by letest </option>
          <option> Short by price : low to high</option>
          <option> Short by price : high to low</option>
        </select>
      </div>



    </div>








  )
}


export default Dropdown;