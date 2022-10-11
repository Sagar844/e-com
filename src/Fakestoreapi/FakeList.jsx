import React from "react"

import FakeProductpage from "./FakeProductpage";



function FakeList({ Products }) {

  return (

    <div className="bg-white md:grid grid-cols-4 gap-2 px-2 mr-5 ml-5 rounded-md    ">
      {Products.map(function(item) {
        return (
          <FakeProductpage 
            key={item.id} {...item}

          />

        );

      })}
    </div>

  );
}

export default FakeList;

