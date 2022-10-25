import React from 'react';
import { Link } from 'react-router-dom';


function Product({ title, price, category, thumbnail, id,stock


}) 




{
  return (
    <div className="  max-w-xs mr-15 ml-10 mt-10 hover:animate-pulse ">
      <div className=" aspect-square">
        <Link className="  " to={'/products/' + id}>
          <img 
            className="w-full border-2   border-gray-400 h-full object-cover rounded-md  "
            src={thumbnail} alt={title}
          />
          <div className="font-bold text-xl text-black  ">{title} </div>
          <div className=" text-gray-500">{category} </div>
          <div className=" text-gray-500"><span className='text-black text-xl font-bold'>stock:</span> {stock} </div>

          <div className="   text-xl font-bold text-orange-600">
     
            Rs.{price}
          </div>
          
        </Link>

      </div>
    </div>
  );
}

export default Product;
