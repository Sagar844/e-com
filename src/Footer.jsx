import React from 'react'

function Footer(data) {

  return (
    <div className="bg-black lg:bg-gray-500 p-5 mt-10 flex" >
      <div className="w-1/4" >
        <img className="ml-5 mt-10" src="https://trycasuals.com/wp-content/uploads/2019/06/print-favicon-free-img-1.png" />
        <h1 className="text-2xl text-white mt-10">Made With ♥️
 CodeYogi</h1>

        <div className="flex mt-10  space-x-5 w-1/4  ">
          <img className="w-8 h-8 animate-spin" src="https://img.icons8.com/color/48/000000/facebook-new.png" />
          <img className="w-8 h-8 " src="https://cdn.discordapp.com/attachments/1001168177952211054/1008020919194751108/output-onlinegiftools.gif" />
          <img className="w-8 h-8" src="https://cdn.discordapp.com/attachments/1001168177952211054/1008022994758676501/output-onlinegiftools_1.gif" />
          <img className="w-8 h-8" src="https://cdn.discordapp.com/attachments/1001168177952211054/1008024345089683496/output-onlinegiftools_2.gif" />

        </div>
      </div>

      <div className="text-center mt-20 w-1/4 mr-10 "  >
        <h1 className="text-xl text-white hover:text-red-500 ">Get in Touch with Us for the Best Quality Custom Prints & Supplies.</h1>
        <p className="text-sm text-white hover:text-red-500">Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores taporro ame.</p>



      </div>

      <div className="mt-20 w-1/4" >
        <h1 className="text-xl text-white ">Quick Links.</h1>
        <p className="text-sm text-white hover:text-red-500 ">Know More About Us<br></br>
          Visit Store
Let’s Connect.</p>



      </div>






      <div className="mt-20 w-1/4 ">
        <h1 className="text-xl text-white ">Important Links</h1>
        <p className="text-sm text-white hover:text-red-500">Privacy Policy
Shipping Details
Terms & Condition</p>



      </div>









    </div>








  );














}
export default Footer;