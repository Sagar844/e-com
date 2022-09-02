import React from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Productpage from "./Productpage"
import { Routes, Route, } from "react-router-dom";
import ProductDetails from "./ProductDetails"

function App() {

  return (
    <div>
      <div className="bg-gray-100 lg:bg-gradient-to-r from-cyan-500 to-blue-500" >
        <Navbar logo="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"></Navbar>
        <Dropdown></Dropdown>
        <div>
          <Routes>
            <Route index element={< Productpage />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}></Route>



          </Routes>
        </div>

        <Footer ></Footer>
      </div>


    </div>

  );
}
export default App;
