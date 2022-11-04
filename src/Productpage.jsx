import React, { useState, useEffect, useCallback } from "react";
import Productlist from "./Productlist";
import { getProductList } from "./api";

import NoproductsMacth from "./NoproductsMacth";
import { range } from "lodash";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { withUser } from "./withProvider";
import UserLoading from "./UserLoading";

function Productpage({ user }) {
  if (!user) {
    return <Navigate to="/Login" />;
  }

  const [loding, setLoading] = useState(true);
  const [productdata, setProductData] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";
  page = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowtohigh") {
        sortBy = "price";
      } else if (sort == "hightolow") {
        sortBy = "price";
        sortType = "desc";
      }

      getProductList(sortBy, query, page, sortType).then(function (xyz) {
        setProductData(xyz);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handlechange(event) {
    setSearchParams(
      { ...params, query: event.target.value },
      { replace: false }
    );
  }

  const handlesortchange = useCallback(function (event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }, []);

  console.log("setSort");

  if (loding) {
    return <UserLoading />;
  }

  return (
    <div>
      <div className=" flex justify-end mr-20   ">
        <select
          className=" rounded-sm border-2"
          onChange={handlesortchange}
          value={sort}
        >
          <option value="default"> Default Sorting </option>
          <option value="title">Short by name </option>
          <option value="lowtohigh"> Short by price : low to high</option>
          <option value="hightolow">Short by price : high to low </option>
        </select>
      </div>

      <div className=" flex justify-center sm:flex px-5 ">
        <input
          value={query}
          type="text"
          onChange={handlechange}
          className="border text-start  border-blue-500 w-96 rounded-md px-20 py-2 "
          placeholder="Search for Products ,brands  "
        />
      </div>

      {productdata.data.length > 0 && (
        <Productlist Products={productdata.data} />
      )}

      {productdata.data.length == 0 && <NoproductsMacth />}
      {range(1, productdata.meta.last_page + 1).map((pageno) => (
        <Link
          key={pageno}
          to={"?" + new URLSearchParams({ ...params, page: pageno })}
          className={
            " p-2 rounded-sm mr-5 space-y-10 text-white" +
            (pageno === page ? " bg-indigo-400" : " bg-gray-500")
          }
        >
          {pageno}
        </Link>
      ))}
    </div>
  );
}

export default withUser(Productpage);
