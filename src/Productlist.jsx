import React from "react"
import Product from "./Product"



function ProductList({ Products }) {

  return (

    <div className="bg-white rounded-md ml-10 mr-10 flex gap-5 flex-row flex-wrap justify-center mt-5  ">
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







