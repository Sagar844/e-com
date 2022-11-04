import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Productpage from "./Productpage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Contact from "./Contact";
import CartPage from "./CartPage";
import Profile from "./Profile";
import Forgot from "./Forgot";
import Productsingle from "./Productsingle";
import Login from "./Login";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";
import AuthRoute from "./AuthRoute";
import CartProvider from "./providers/CartProvider";
import Signup from "./Signup";
import Alert from "./Alert";






function App() {



  return (
    <div className="bg-gray-200  lg:bg-gray-200 h-screen  flex flex-col space-y-5">
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Navbar />
            <Alert/>
            <Routes>
              <Route index element={<Productpage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/product/:_id" element={<Productsingle />} />
             
              <Route
                path="Login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Forgot" element={<Forgot />}></Route>
              <Route path="/Profile" element={<Profile />} />
            </Routes> 
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}
export default App;
