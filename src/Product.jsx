import React from 'react'
import { Link } from "react-router-dom";

function Product({ title, price, category, thumbnail, id }) {
  return (

    <div className=" mt-5" >
      <Link className="  " to={"/products/" + id}>
        <img className="rounded-md " src={thumbnail} />
        <div className="text-bold ">{title} </div>
        <div>{category} </div>
        <div> Rs.{price} </div>
      </Link>
    </div>

  );
}

export default Product;