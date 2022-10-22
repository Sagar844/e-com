import React from "react";
import Product from "./Product";

function ProductList({ Products }) {
  console.log(Products);
  return (
    <div className="bg-white md:grid grid-cols-5 gap-2 px-2 mr-5 ml-5 rounded-md    ">
      {Products.map(function (item) {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ProductList;
