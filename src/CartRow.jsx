import React from "react";
import { TiDeleteOutline} from "react-icons/ti";
import  {Link} from "react-router-dom";
import {withAlert} from "./withProvider";

function CartRow({ product, quantity, onQuantityChange, onRemove,setAlert }) {

  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(product.id);
    setAlert({
type: "Success",
message: "Item Remove Successfully " + product.title,

    })
  }

  function handleMouseEnter() {
    console.log("handleMouseEnter called");
  }

  return (
    <div className="flex flex-row items-center px-4 py-3 space-x-4 border   rounded-md mb-5  border-gray-300">
      <span className="flex items-center ">
        <TiDeleteOutline className="text-5xl text-green-500 hover:text-red-600" onClick={handleCrossClick} onMouseEnter={handleMouseEnter} />
      </span>
      <div className="">
        <Link to={"/products/"+ product.id}>
        <img className="w-40" src={product.thumbnail} />
        </Link>
      </div>
      <h3 className="grow">{product.title}</h3>
      <span className="w-10 rounded-md">${product.price}</span>
      <div className="w-32">
        <input
          type="number"
          className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
          value={quantity}
          onChange={handleChange}
        />
        
      </div>
      
      <span className="w-20">${product.price * quantity}</span>
    </div>
  );
}

export default withAlert(CartRow);
