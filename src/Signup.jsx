import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, } from 'firebase/auth';
import { auth } from './firebase';


function Signup() {
	const navigate = useNavigate();
	const [values, SetValues] = useState({
		name: '',
		email: '',
		password: ''
	});

	const [errmes, seterrmes] = useState('');
	const [subtndisable, setbtndisable] = useState(false);

	const handlesubmit = () => {
		if (!values.name || !values.email || !values.password) {
			seterrmes('fill ALL DATA');
			return;
		}
		seterrmes('');
		setbtndisable(true);

		createUserWithEmailAndPassword(auth, values.email, values.password)
			.then(async res => {
				setbtndisable(false);

				const user = res.user;
				await updateProfile(user, {
					displayName: values.name
				});

				navigate('/Loginpage');
			})
			.catch(err => {
				setbtndisable(false);
				console.log('error', err);
				seterrmes(err.message);
			});
	};


	return (
		<div>
			<div  className=" p-5 bg-[url('https://cdn.discordapp.com/attachments/1001168177952211054/1027213795967385721/cesar-couto-TIvFLeqZ4ec-unsplash.jpg')] bg-cover flex items-center  justify-center space-y-5">
				<form className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  px-10 py-20 rounded-md text-center">
					<label>Name:</label>
					<br />
					<input
						placeholder="Enter your name"
						name="name"
						autoComplete="on"
						onChange={event =>
							SetValues(prev => ({ ...prev, name: event.target.value }))
						}
						className="border-2 solid border-orange-500 rounded-md px-16 py-3"
					/>
					<br /> <br />
					<label>Email:</label>
					<br />
					<input
						placeholder="Enter your email"
						name="email"
						onChange={event =>
							SetValues(prev => ({ ...prev, email: event.target.value }))
						}
						className="border-2 solid border-orange-500 rounded-md px-16 py-3"
					/>
					<br /> <br />
					<label>Password:</label>
					<br />
					<input
						placeholder="Password"
						name="password"
						type="Password"
						autoComplete="on"
						onChange={event =>
							SetValues(prev => ({ ...prev, password: event.target.value }))
						}
						className="border-2 solid border-orange-500 rounded-md px-16 py-3"
					/>
					<br /> <br />
					<div className="text-red-500 animate-bounce text-2xl mb-5">
						{errmes}
					</div>
					<button
						className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-3 px-5 rounded-md disabled:bg-gray-500"
						disabled={subtndisable}
						onClick={handlesubmit}
						type="submit"
					>
						{' '}
						Signup
					</button>
					<Link
						className="bg-blue-600 text-white text-bold px-5 py-3 ml-2 rounded-md "
						to="/Loginpage"
					>
						{' '}
						Login
					</Link>




				</form>
			</div>
		</div>
	);
}
export default Signup;
