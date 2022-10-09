import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

 function PopupGfg(){
    let url ="https://www.linkedin.com/in/sagar-kumar-a3097a202/";
return(
<div className='bg-gray-400 px-2 py-3 rounded-md hidden sm:flex text-white font-bold'>

	<Popup  trigger={<button> My LinkedIn Profile</button>}
	position="bottom center ">
	<div className='bg-gray-200 '>

 <a href={url}  target="_blank"><img className="max-w-md "src="https://cdn.discordapp.com/attachments/1001168177952211054/1020696218189451324/444.PNG" alt="" /></a>
</div>
	
	</Popup>
</div>
)
};
export default PopupGfg;