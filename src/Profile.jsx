import React from 'react';

function Profile(props) {

  return (
    <div className="bg-gray-300 px-10 py-40 flex justify-center">
      <div className="font-bold text-3xl ml-5 text-orange-500 bg-white rounded-md px-20 py-40 ml-10 mr-10">
        {props.name ? `Welcome - ${props.name}` : 'Login please'}
      </div>
    </div>
  );
}
export default Profile;
