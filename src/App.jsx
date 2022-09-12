import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Productpage from './Productpage';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Loginpage from './Loginpage';
import Contact from './Contact';
import Cart from './Cart';
import Signup from './Signup';
import { auth } from './firebase';
import Profile from './Profile';

function App() {
	const saveddatastring = localStorage.getItem('my-cart') || '{}';
	const savedData = JSON.parse(saveddatastring);

	const [cart, setCart] = useState(savedData);
	function handleaddtocart(productId, count) {
		let oldcount = cart[productId] || 0;

		const newcart = { ...cart, [productId]: oldcount + count };
		setCart(newcart);
		const cartstring = JSON.stringify(newcart);
		localStorage.setItem('my-cart', cartstring);
	}
	const totalcount = Object.keys(cart).reduce(function(output, current) {
		return output + cart[current];
	}, 0);

	const [username, setUser] = useState('');

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setUser(user.displayName);
			} else setUser('');
			console.log(user);
		});
	}, []);

	// const [email, setemail] = useState('');

	// useEffect(() => {
	// 	auth.onAuthStateChanged(user => {
	// 		if (user) {
	// 			setUser(user.email);
	// 		} else setUser('');
	// 		console.log(user);
	// 	});
	// }, []);

	return (
		<div className="bg-gray-300 lg:bg-gray-300 h-screen overflow-scroll flex flex-col">
			<Navbar Productcount={totalcount} />

			<div
				className="
   grow "
			>
				<Routes>
					<Route index element={<Productpage />} />
					<Route
						path="/products/:id"
						element={<ProductDetails onaddtocart={handleaddtocart} />}
					/>
					<Route path="/Loginpage" element={<Loginpage />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Cart" element={<Cart />} />

					<Route path="/Signup" element={<Signup />} />
					<Route path="/Loginpage" element={<Loginpage />} />

					<Route
						path="/Profile"
						element={<Profile name={username}  />}
					/>
				</Routes>

				<Footer />
			</div>
		</div>
	);
}
export default App;
