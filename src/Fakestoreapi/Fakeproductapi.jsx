import React, { useState, useEffect } from "react";
import { getProductStoreapi } from "../api";
import UserLoading from "../UserLoading";
import FakeList from "./FakeList";

function Fakeproductapi() {
  const [loding, setLoading] = useState(true);
  const [productxyz, setProductxyz] = useState([]);

  useEffect(function () {
    const xyz = getProductStoreapi();
    xyz.then(function (product) {
      setProductxyz(product);
      setLoading(false);
    });
  }, []);

    if (loding) {
    return <UserLoading />;
  }
  let data = productxyz;
  console.log(data);


  return (
    <div>
      <FakeList Products={data} />
    </div>
  );
}

export default Fakeproductapi;
