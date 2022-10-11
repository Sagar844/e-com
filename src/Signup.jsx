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
			<div  className=" p-5 bg-gray-100">
				
				<form className="rounded-md text-center space-y-5 mt-10">
				
			<div className='text-black font-bold text-xl '>BECOME A PRINT MEMBER</div>
					
					<br />
					<input
						placeholder="Enter your name"
						name="name"
						autoComplete="on"
						onChange={event =>
							SetValues(prev => ({ ...prev, name: event.target.value }))
						}
						className="border  bg-transparent rounded-sm font-bold px-10 py-1"
					/>

					<br />
					<input
						placeholder="Enter your email"
						name="email"
						onChange={event =>
							SetValues(prev => ({ ...prev, email: event.target.value }))
						}
						className="border  bg-transparent rounded-sm font-bold px-10 py-1"
					/>
				
			
					<br />
					<input
						placeholder="Password"
						name="password"
						type="Password"
						autoComplete="on"
						onChange={event =>
							SetValues(prev => ({ ...prev, password: event.target.value }))
						}
						className="border  bg-transparent rounded-sm font-bold px-10 py-1"
					/>
				
					<div className="text-red-500 animate-bounce text-2xl mb-5">
						{errmes}
					</div>
					<button
						className="bg-black px-28 py-1 text-white font-bold rounded-sm disabled:bg-gray-500"
						disabled={subtndisable}
						onClick={handlesubmit}
						type="submit"
					>
						{' '}
						Join Us
					</button>
					<div>
					<span>Already a Member?</span>
					
					<Link
						className=""
						to="/Loginpage"
					>
						
						Login
					</Link>
</div>



				</form>
			</div>
		</div>
	);
}
export default Signup;
