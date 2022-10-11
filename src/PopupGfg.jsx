import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Loginpage from './Loginpage';

 function PopupGfg(){

return(
<div className="">

	<Popup  trigger={<button> login</button>}
	position="bottom-center ">
	<div className='bg-gray-200 '>
<Loginpage/>
 
</div>

	
	</Popup>
</div>
)
};
export default PopupGfg;