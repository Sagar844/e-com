import React from "react"
import Fakeproduct from "./Fakeproduct"



function Productfakelist({ Products }) {

  return (

    <div className="bg-white md:grid grid-cols-4 gap-2 px-2 mr-5 ml-5 rounded-md    ">
      {Products.map(function(item) {
        return (
          <Fakeproduct 
            key={item._id} {...item}

          />

        );

      })}
    </div>

  );
}

export default Productfakelist;



