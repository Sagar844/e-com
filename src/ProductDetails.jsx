import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./api"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Loading from "./Loading";
import DataNotFound from "./DataNotFound"
import { getProductList } from "./api";
import Productlist from "./Productlist";


function ProductDetails({ onaddtocart }) {

  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const [count, setCounter] = useState(1);

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(function() {
    const p = getProductData(id);
    p.then(function(products) {
      setProduct(products);
      setLoading(false);

    }).catch(function() {
      setLoading(false);

    });

  }, []
  );




  useEffect(function() {
    const xyz = getProductList();

    xyz.then(function(products) {

      setProductList(products)
      setLoading(false);

    });


  }, []);

  let data = productList;

  const btn = () => {

    setCounter(count + 1)

  }
  const btn2 = () => {

    setCounter(count - 1)

  }
  function handlebuttonclick() {
    onaddtocart(id, count)

  }





  if (loading) {
    return <Loading></Loading>;

  }


  if (!product) {

    return <DataNotFound></DataNotFound>
  }



  return (
    <>
      <div className="bg-white rounded-lg mt-20 mx-9 px-5 py-20 flex gap-5   ">
        <div className="  flex  space-x-10 ">
          <TransformWrapper>
            <TransformComponent>


              <img className="rounded-md w-full h-full max-w-md object-cover " src={product.thumbnail} />
            </TransformComponent>
          </TransformWrapper>
          <div className="">
            <div className="text-bold text-red-500 text-3xl ">{product.title} </div>
            <div className="text-xl font-bold">{product.category} </div>
            <div className="text-2xl font-bold text-orange-600"> Rs.{product.price} </div>
            <div className="flex space-x-5  mt-5  ">
              <button className="bg-orange-500 text-white px-3 py-2 rounded-md  disabled:bg-gray-500 " disabled={(count) <= 1} onClick={btn2} > - </button>


              <h1 className="text-5xl text-red-400 border border-green-400 p-1 bg-gray-200">{count} </h1>


              <button className="bg-orange-500 text-white  rounded-md px-3 py-2  ml-5" onClick={btn} > +</button>
              <div className="">
                <button onClick={handlebuttonclick} className="bg-orange-400 p-2 rounded-sm text-white">Add to Cart</button>
              </div>

            </div>

          </div>
          <div className="mr-20">

            <Link className="bg-indigo-500 p-2 rounded-md hover:bg-orange-500 " to="/">  Back </Link>
          </div>
        </div>

      </div >
      <div className="text-3xl text-bold ml-10">You might be interested in</div>
      <div className="mt-5">
        <Productlist Products={data} />

      </div>

    </>);
}

export default (ProductDetails);