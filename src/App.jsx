import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Footer from "./Footer";
import Dropdown from "./Dropdown";
import ProductDetails from "./ProductDetails";




function App() {
  return (
    <div className="bg-gray-100 lg:bg-gradient-to-r from-cyan-500 to-blue-500" >
      <Navbar logo="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"></Navbar>


      <div className=" p-2 flex flex-wrap justify-center  mt-10 bg-white rounded-md ml-10 mr-10   " >

        <Dropdown></Dropdown>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/mug-yellow-4-300x300.jpg" productName="Black Printed Coffee Mug" category="Mugs" price="$ 50"  > </Product>


        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg" productName="Black Printed Coffee Mug" category="Mugs" price="$ 60"  ></Product>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/tshirt4-4-300x300.jpg" productName="Printed Dark Blue Tshirt" category="T-shirt" price="$ 70"></Product>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/tshirt6-4-300x300.jpg" category="T-shirt" productName="Printed Dark Blue Tshirt" price="$ 80" ></Product>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/tshirt5-4-300x300.jpg" productName="Black Printed Coffee Mug" category="T-shirt" price="$ 100"></Product>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/tshirt3-4-300x300.jpg " category="T-shirt" productName="Printed Dark Blue Tshirt" price="$ 50" ></Product>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/tshirt7-4-300x300.jpg" category="T-shirt" productName="Printed Dark Blue Tshirt" price="$ "></Product>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/mug-yellow-4-300x300.jpg" category="Mugs" productName="Black Printed Coffee Mug" price="$ 50"></Product>

        <Product pic="https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg" category="Mugs" price="$ 50" productName="Black Printed Coffee Mug"></Product>





      </div>

      <Footer ></Footer>

      <div>


        <ProductDetails></ProductDetails>



      </div>
    </div>




  );
}

export default App;
