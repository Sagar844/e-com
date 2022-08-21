import React from 'react'

function Product(data) {
  return (
    <div>



      <div className='  m-5  ' >

        <img src={data.pic} />
      </div>
      <div className=" ml-5 ">
        <h1 className="text-gray-400"> {data.category}</h1>
        <h1 className="text-lg text-black hover:text-red-500"> {data.productName}</h1>
        <h1 className="text-orange-500">{data.price}</h1>




      </div>
    </div>







  );
}

export default Product;