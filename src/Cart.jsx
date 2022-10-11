import React, { useEffect } from "react";
import { useState } from "react";
import { getProductData } from "./api";
import { RiDeleteBin6Line } from "react-icons/ri";
import Loading from "./Loading";
import {Link} from "react-router-dom"


function Cart({ cart, updateCart }) {
  // useState
  // prop cart from app.jsx
  const [products, setProducts] = useState([]);
  const productIds = Object.keys(cart);
  const [loding, setLoding] = useState(true);
  const [local, setLocalCart] = useState(cart);

  // useEffect(
  //   function () {
  //     setLocalCart();
  //   },
  //   [cart]
  // );

  // API call with useEffect promise.all

  useEffect(
    function () {
      const myproductpromise = productIds.map(function (id) {
        return getProductData(id);
      });

      Promise.all(myproductpromise).then(function (products) {
        setProducts(products);
        setLoding(false);
      });
    },
    [cart]
  );

  console.log(products);
  if (loding) {
    return <Loading />;
  }

  function handleremoveitems(event) {
    const productId = event.currentTarget.getAttribute("productid");

    console.log("products remove ", productId);

    const newCart = { ...cart };
    console.log("before", cart);
    delete newCart[productId];

    updateCart(newCart);
   
  }


  function UpdateCartlist() {
    updateCart(local);


  }

  
  function handlechange(event) {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productid");

    console.log("handlechange", newValue, productId);
    const newLocalCart = { ...local, [productId]: newValue };

    setLocalCart(newLocalCart);
    
  }
  return (
    <div className="flex flex-col justify-start rounded-sm bg-white px-10 mr-96 ml-5 py-4 mt-5 mb-5">
      <h1 className="text-blue-400 text-xl font-bold">My Cart</h1>
      {products.map(function (p) {
        return (
        
        
        
          <div key={p.id}>
              <Link to={"/products/" + p.id}>
            <img className="w-40" src={p.thumbnail} />
            {p.title}
            {p.price}
           </Link>
            <input
              productid={p.id}
              value={local[p.id]}
              onChange={handlechange}
              className="px-5 border border-gray-400 rounded-md"
              type="text"
            />
            <button
              productid={p.id}
              onClick={handleremoveitems}
              className=" text-bold text-3xl text-red-700"
            >
              <RiDeleteBin6Line />
            </button>
             
          </div>
       
        
        );
      })}

      <button onClick={UpdateCartlist}>Update cart</button>
    </div>
   

  );
}
export default Cart;
