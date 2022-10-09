import React, { useState, useEffect } from "react";
import { getProductStoreapi } from "../api";
import FakeList from "./FakeList";
// import Loading from "./Loading";

function Fakeproductapi() {
  const [productxyz, setProductxyz] = useState([]);
  const [loding, setLoading] = useState(true);

  useEffect(function () {
    const xyz = getProductStoreapi();

    xyz.then(function (product) {
      setProductxyz(product);
      // setLoading(false);
    });
  }, []);

  let data = productxyz;
console.log(data)
  // if (loding) {
  //   return <Loading />;
  // }

  return (
    <div>
      <FakeList Products={data} />
    </div>
  );
}

export default Fakeproductapi;
