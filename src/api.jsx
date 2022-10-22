import axios from "axios";

export function getProductData(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)

    .then(function (response) {
      console.log(response);
      return response.data;
    });
}

export function getProductsByIds(ids) {
  const commaSepeartedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepeartedIds,
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function getProductList(sortBy, search, page, sortType) {
  let params = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }

  if (search) {
    params.search = search;
  }

  if (page) {
    params.page = page;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    });
}

export function getProductFake() {
  return axios
    .get("https://ecom-rest-apis.herokuapp.com/api/products/")
    .then(function (response) {
      // console.log(response)
      return response.data;
    });
}
export function getProductid(_id) {
  return axios
    .get("https://ecom-rest-apis.herokuapp.com/api/products/" + _id)
    .then(function (response) {
      // console.log(response)
      return response.data;
    });
}

export function getProductStoreapi() {
  return axios
    .get("https://fakestoreapi.com/products?sort=desc")
    .then(function (response) {
      console.log(response);
      return response.data;
    });
}

export function saveCart(cart) {
  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      { data: cart },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then(function (response) {
      return response.data;
    });
}

export function getCart() {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(function (response) {
      return response.data;
    });
}
