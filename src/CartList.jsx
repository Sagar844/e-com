import React, { useState, useEffect } from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import { withAlert, withCart } from "./withProvider";


function CartList({ cart, updateCart ,setAlert,cartCount}) {

  
  const [quantityMap, setQuantityMap] = useState();

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
    },
    [cart]
  );

  function handleQuanityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
    console.log(newQuantityMap)
  }

  function handeUpdateCartClick() {
    updateCart(quantityMap);
    setAlert({
      type: "Success",
      message: "  Quantity Update Successfully "  ,
     
    })
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }
  
  

  return (
    <div>
      <div className="flex px-4 py-2 space-x-4 bg-gray-100 border border-gray-300">
        <span className="ml-28 grow">Product</span>
        <span className="w-20">Price</span>
        <span className="w-32">Quantity</span>
        <span className="w-20">Subtotal</span>
        <span className="w-20">total</span>
      </div>
      {cart.map((cartItem) => (
        <CartRow
          key={cartItem.product.id}
          product={cartItem.product}
          quantity={ cartItem.quantity}
          onQuantityChange={handleQuanityChange}
          onRemove={handleRemove}
        />
      ))}
      <div className="flex justify-end px-4 py-2 border border-gray-300">
        <Button onClick={handeUpdateCartClick}>Update Cart</Button>
      </div>
    </div>
  );
}

export default withCart(withAlert(CartList));
