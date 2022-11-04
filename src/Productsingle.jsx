import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductid } from "./api";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import UserLoading from "./UserLoading";
import DataNotFound from "./DataNotFound";

import { memo } from "react";
import Fakeproductapi from "./Fakestoreapi/Fakeproductapi"

function Productsingle({ onaddtocart }) {
  const { _id } = useParams();
  const [productList, setProductList] = useState([]);

  const [count, setCounter] = useState(1);

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const p = getProductid(_id);
    p.then(function (product) {
      setProduct(product);
      setLoading(false);
    }).catch(function () {
  
    });
  }, []);

  const btn = () => {
    setCounter(count + 1);
  };
  const btn2 = () => {
    setCounter(count - 1);
  };
  const handlebuttonclick = useCallback(
    function () {
      onaddtocart(_id, count);
      setCounter(1);
    },
    [_id, count]
  );

  if (loading) {
    return <UserLoading/>
  }

  if (!product) {
    return <DataNotFound></DataNotFound>;
  }

  return (
    <>
      <div className="bg-white rounded-lg mt-20 mx-9 px-5 py-20 flex gap-5   ">
        <div className="  flex  space-x-10 ">
          <TransformWrapper>
            <TransformComponent>
              <img
                className="rounded-md w-full h-full max-w-md object-cover border-2 border-gray-400 "
                src={product.image}
              />
            </TransformComponent>
          </TransformWrapper>
          <div className="">
            <div className="text-bold text-red-500 text-3xl ">
              {product.name}{" "}
            </div>

            <div className="text-2xl font-bold text-orange-600">
              {" "}
              Rs.{product.price}{" "}
            </div>

            <div className="flex space-x-5  mt-5  ">
              <button
                className="bg-orange-500 text-white px-3 py-2 rounded-md  disabled:bg-gray-500 "
                disabled={count <= 1}
                onClick={btn2}
              >
                {" "}
                -{" "}
              </button>

              <h1 className="text-5xl text-red-400 border border-green-400 p-1 bg-gray-200">
                {count}{" "}
              </h1>

              <button
                className="bg-orange-500 text-white  rounded-md px-3 py-2  ml-5"
                onClick={btn}
              >
                {" "}
                +
              </button>
              <div className="">
                <button
                  onClick={handlebuttonclick}
                  className="bg-orange-400 p-2 rounded-sm text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mr-20">
            <Link
              className="bg-indigo-500 p-2 rounded-md hover:bg-orange-500 "
              to="/"
            >
              {" "}
              Back{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="text-3xl text-bold ml-10">You might be interested in</div>
      <div className="mt-5">
 <Fakeproductapi/>
      </div>
    </>
  );
}

export default memo(Productsingle);
