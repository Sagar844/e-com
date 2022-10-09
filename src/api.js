import axios from "axios";


export function getProductData(id) {

  return axios.get('https://dummyjson.com/products/' + id).then(function(response) {

    return response.data;
  });


}
export function getProductList() {

<<<<<<< HEAD
  return axios.get('https://dummyjson.com/products?limit=50').then(function(response) {
=======
  return axios.get('https://dummyjson.com/products/?limit=100').then(function(response) {
>>>>>>> 2488b7bfbc34bc8867e22ec0435476b5ed80fb95

    return response.data.products;
  });


}


export function getProductFake() {

  return axios.get('https://ecom-rest-apis.herokuapp.com/api/products/').then(function(response) {
// console.log(response)
    return response.data;
    
  });


}



export function getProductid(_id) {

  return axios.get('https://ecom-rest-apis.herokuapp.com/api/products/' + _id).then(function(response) {
// console.log(response)
    return response.data;
    
  });


}

export function getProductStoreapi() {

  return axios.get('https://fakestoreapi.com/products').then(function(response) {
console.log(response)
    return response.data;
    
  });


}



