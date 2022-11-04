import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import { getProductData } from "./api";
import { withCart } from "./withProvider";
import DataNotFound from './DataNotFound'
const CartListpage = () => {


  const [productInfo, setProductInfo] = useState([]);

  const kaamKiChij = JSON.parse(localStorage.getItem("my-cart") || "{}");

  useEffect(() => {
    const promises = Object.keys(kaamKiChij).map((productId) => {
      return getProductData(productId);
    });
    Promise.all(promises).then(function (products) {
      setProductInfo(products);
      console.log("product is", products);
    });
  }, []);
  if (!productsId) {
    return <DataNotFound></DataNotFound>;
  }


  return (
    <div>
      <CartList product={productInfo} />
    </div>
  );
};

export default withCart (CartListpage);
