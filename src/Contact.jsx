import React from 'react';
import { useState } from 'react';

function Contact() {
  const [user, SetUser] = useState({
    name: '',
    lastname: '',
    email: '',
    phonenumber: '',
    message: ''
  });
  let name, value;
  const getuserdata = event => {
    name = event.target.name;
    value = event.target.value;
    SetUser({ ...user, [name]: value });
  };
  const postData = async e => {
    e.preventDefault();

    const { name, lastname, email, phonenumber, message } = user;

    const res = await fetch(
      'https://custom-resource-349421-default-rtdb.firebaseio.com/myfirstproject.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'appliction/json'
        },
        body: JSON.stringify({
          name,
          lastname,
          email,
          phonenumber,
          message
        })
      }
    );

    if (res) {
      SetUser({
        name: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: ''
      });
      alert('Thank You for Submitting ');
    }
  };

  return (

    <div className=" p-5  bg-gradient-to-r from-indigo-500 flex items-center  justify-center overflow-x-hidden">
      <form method="POST" className=" space-y-5 mt-10 bg-white px-40 py-20 rounded-md text-center  ">
        <div className="text-3xl font-bold  mb-5">Ask Your Queries</div>
        <label className="text-2xl text-bold">Name</label>
        <br />
        <input
          placeholder="Enter name"
          type="text"
          name="name"
          className="border-2 solid border-orange-500 rounded-md px-16 py-3"
          value={user.name}
          onChange={getuserdata}
        />
        <br />
        <br />
        <label className="text-2xl text-bold">Last Name</label>
        <br />
        <input
          placeholder="Enter your lastname"
          type="Text"
          name="lastname"
          className="border-2 solid border-orange-500 rounded-md px-16 py-3"
          value={user.lastname}
          onChange={getuserdata}
        />
        <br />
        <br />
        <label className="text-2xl text-bold">Email</label>
        <br />
        <input
          placeholder="Enter your email"
          name="email"
          className="border-2 solid border-orange-500 rounded-md px-16 py-3"
          value={user.email}
          onChange={getuserdata}
        />
        <br /> <br />
        <label className="text-2xl text-bold">Phone Number</label>
        <br />
        <input
          placeholder="Enter Your Phonenumber"
          name="phonenumber"
          type="tel"
          className="border-2 solid border-orange-500 rounded-md px-16 py-3 text-center"
          value={user.phonenumber}
          onChange={getuserdata}
        />
        <br /> <br />
        <label className="text-2xl text-bold"> Message</label>
        <br />
        <textarea
          placeholder=" Enter Your Quriy"
          name="message"
          type="text"
          className="border-2 solid border-orange-500 rounded-md px-16 py-3 text-center"
          value={user.message}
          onChange={getuserdata}
        />
        <br />
        <button
          className="bg-red-400  text-white py-3 px-20 rounded-md hover:bg-green-500  "
          type="submit"
          onClick={postData}
        >
          {' '}
          SEND MESSAGE
				</button>

      </form>


    </div>
  );
}

export default Contact;
