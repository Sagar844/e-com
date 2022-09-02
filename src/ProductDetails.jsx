import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./api"
import { ImSpinner10 } from 'react-icons/im';




function ProductDetails() {
  const { id } = useParams();

  const [count, setCounter] = useState(1);

  const [product, setProduct] = useState();


  useEffect(function() {
    const p = getProductData(id);
    p.then(function(respones) {
      setProduct(respones.data);
    });
  }, []);









  const btn = () => {

    setCounter(count + 1)

    console.log(count)

  }
  const btn2 = () => {

    setCounter(count - 1)

  }


  return product ? (

    <div className="bg-white rounded-lg mt-5 mx-5 p-5 flex gap-5   "> {console.log(count)}
      <div className="w-1/2">
        <img className="rounded-md  w-3/4  " src={product.thumbnail} />
        <div className="text-bold text-red-500 text-3xl ">{product.title} </div>
        <div>{product.category} </div>
        <div> Rs.{product.price} </div>
        <div className="flex space-x-5 ">
          <button className="bg-orange-500 text-white p-3 rounded-md ml-5 disabled:bg-gray-500 " disabled={(count) <= 1} onClick={btn2} > - </button>


          <h1 className="text-5xl text-red-400 border border-green-400 p-1 bg-gray-200">{count} </h1>


          <button className="bg-orange-500 text-white p-2 rounded-md ml-5" onClick={btn} > + Add items</button>

        </div>

      </div>
      <div className="">

        <Link className="bg-indigo-500 p-2 rounded-md " to="/">  Back </Link>
      </div>




    </div >
  ) : (

      <div role="status">
        <svg aria-hidden="true" className=" w-8 h-8 ml-96 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>

    );

}

export default ProductDetails;