import React from 'react';
import { Link } from 'react-router-dom';

function Fakeproduct({ name, size,_id ,price,image}) {


  return (
    <div className="  max-w-xs mr-15 ml-10 mt-10 ">
      <div className="w-full aspect-square">
        <Link className="  " to={'/product/' + _id}>
          <img
            className="w-full border-2 border-gray-400 h-full object-cover rounded-md  "
            src={image}
          />
          <div className="font-bold text-2xl text-black  ">{name} </div>
          <div className=" text-gray-500">{size} </div>

          <div className="   text-2xl font-bold text-orange-600">
            
            Rs.{price}
          </div>

        

          
         
        </Link>

      </div>
    </div>
  );
}

export default Fakeproduct;
