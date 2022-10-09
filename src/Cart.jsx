import React, { useEffect } from "react";
import { useState } from "react";
import { getProductData } from "./api";

import Loading from "./Loading";

function Cart({ cart ,  updateCart}) {
  // useState
  // prop cart from app.jsx
  const [products, setProducts] = useState([]);
  const productIds = Object.keys(cart);
  const [loding ,setLoding] = useState(true)
  // const [localCart, setLocalCart] = useState(cart)


// useEffect(function(){

// setLocalCart();

// },[cart]);
// console.log(cart)


// API call with useEffect

  useEffect(function () {
    const myproductpromise = productIds.map(function (id) {
      return getProductData(id);
    });

    Promise.all(myproductpromise).then(function (products) {
      setProducts(products);
      setLoding(false)
    });
  }, [cart]);
console.log(products)
if(loding){
return <Loading/>


}

 
function handleremoveitems(event){

 const productId =  event.target.getAttribute("productid")

  console.log("products remove " ,productId)

 const newCart = {...cart}; 
console.log("before", cart)
delete newCart[productId]
updateCart(newCart)

}
function   UpdateCart(){ 
  }
 
// function handlechange(event){

//   const newValue = event.target.value;
// const productId = event.target.getAttribute("productid")

//   console.log("handlechange",newValue,productId)
//   const newLocalCart ={...localCart ,[productId]: newValue}
//   setLocalCart(newLocalCart)
//  console.log(localCart)
//   }
 
  




  return (
    <div className="flex flex-col items-center rounded-md bg-white px-10 mr-20 ml-20 py-4 mt-5 mb-5">
      <h1 className="text-blue-400 text-xl font-bold">My Cart</h1>
      {products.map(function (p) {
        return (
          <div key={p.id}>
             <img className="w-20" src={p.thumbnail}  />   
            {p.title}
            {p.price}




          <input productid={p.id}  className="px-5 border border-gray-400 rounded-md" type="number"  />  
        <button productid={p.id} onClick={handleremoveitems} className=" bg-gray-400 hover:bg-red-500 p-2  text-white">Remove Items</button>
          </div>
 
  
        );
      })}

      <button onClick={UpdateCart}>Update cart</button>
    </div>
  );
}
export default Cart;
