import React from "react"
import Product from "./Product"



function ProductList({ Products }) {

  return (

    <div className="bg-white md:grid grid-cols-3 gap-2  mr-10 ml-10 rounded-md  ">
      {Products.map(function(item) {
        return (

          <Product
            key={item.title} {...item}

          />

        );

      })}
    </div>

  );
}

export default ProductList;







