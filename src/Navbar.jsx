
import React from 'react'

function Navbar(data) {
  return (

    <div className="bg-white py-8 flex items-center shadow-sm  ">
      <div className="" >
        <img className='ml-5  w-40' src={data.logo} />
      </div>
      <div className='flex space-x-5 ml-auto  items-center hidden sm:flex   '>
        <h1 className='hover:text-red-500 '>HOME</h1>
        <h1 className='hover:text-red-500 '>ABOUT</h1>
        <h1 className='hover:text-red-500 '>ALL PRODUCT</h1>
        <h1 className='hover:text-red-500 '> CONTACT</h1>
        <h1 className='hover:text-red-500 '> ACCOUNT</h1>


      </div>
      <div className="ml-72 lg:flex lg:mr-16 mr-8 lg:mr-0 lg:ml-10 w-40    ">
        <img src="https://cdn.discordapp.com/attachments/998764908479004743/1007740290695712798/unknown.png" />

      </div>







    </div>
  )
}

export default Navbar;