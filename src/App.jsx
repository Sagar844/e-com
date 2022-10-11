import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Productpage from "./Productpage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Loginpage from "./Loginpage";
import Contact from "./Contact";
import Cart from "./Cart";
import Signup from "./Signup";
import { auth } from "./firebase";
import Profile from "./Profile";
import Forgot from "./Forgot";
import Productsingle from "./Productsingle";




function App() {
  // cart saved data productId and itemscount
  const saveddatastring = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(saveddatastring);

  const [cart, setCart] = useState(savedData);
  function handleaddtocart(productId, count) {
    let oldcount = cart[productId] || 0;

    const newcart = { ...cart, [productId]: oldcount + count };
  updateCart(newcart)
  }


function updateCart(newcart){

  setCart(newcart);
    const cartstring = JSON.stringify(newcart);
    localStorage.setItem("my-cart", cartstring);



}




  const totalcount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

  // userdata from firebase
  const [username, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      } else setUser("");
      console.log(user);
    });
  }, []);

  const [useremail, setemail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((usersagar) => {
      if (usersagar) {
        setemail(usersagar.email);
      } else setemail("");
    });
  }, []);

  const [userlast, settime] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((uservishal) => {
      if (uservishal) {
        settime(uservishal.metadata.lastSignInTime);
      } else settime("");
    });
  }, []);

  const [userimg, setimage] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((userurl) => {
      if (userurl) {
        setimage(userurl.photoURL);
      } else setimage("");
    });
  }, []);



  // jsx 

  return (
    <div className="bg-gray-300 lg:bg-gray-300 h-screen overflow-x-scroll flex flex-col">
      <Navbar Productcount={totalcount} name={username} />
      <div
        className="
   grow "
      >
        <Routes>
          <Route index element={<Productpage username={username} />} />
          <Route
            path="/products/:id"
            element={<ProductDetails onaddtocart={handleaddtocart} />}
          />
          <Route
            path="/product/:_id"
            element={<Productsingle onaddtocart={handleaddtocart} />}
          />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart cart={cart}   updateCart={updateCart} />} />

          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Loginpage"
            element={<Loginpage username={username} setUser={setUser} />}
          />
          <Route path="/Forgot" element={<Forgot />}></Route>

          <Route
            path="/Profile"
            element={
              <Profile
                name={username}
                email={useremail}
                last={userlast}
        
              />
            }
          />
        </Routes>

        <Footer />

      </div>
    </div>

  );
}
export default App;
