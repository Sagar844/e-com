import React from 'react';
import { useState,useEffect } from 'react';

import Avatar from '@mui/material/Avatar';
import { useAuth ,uploads} from './firebase';

function Updateprofile() {
  

const currentUser = useAuth();
const [photo,setPhoto] =useState(null)
const [loading,setLding] = useState(false);
const [photoURL,setPhotoURL] = useState(null);


function handleimg (e) {

  if (e.target.files[0]) {
        setPhoto(e.target.files[0]);

}
}


function handlesave(){

uploads(photo,currentUser.setLding)


}

useEffect(() =>{
  if(currentUser ?.photoURL){

     setPhotoURL(currentUser.photoURL)
  }

  }, [currentUser]);
















  // const [img, setImg] = useState(null);
  // const [url, setUrl] = useState(null);

  // const handleimg = e => {
  //   if (e.target.files[0]) {
  //     setImg(e.target.files[0]);
  //   }
  // };
  // const handlesave = () => {
  //   const imgRef = ref(storage, 'img');
  //   uploadBytes(imgRef, img)
  //     .then(() => {
  //       getDownloadURL(imgRef)
  //         .then(url => {
  //           setUrl(url);
  //         })
  //         .catch(error => {
  //           console.log(error.message, 'error');
  //         });

  //       setImg(null);
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //     });
  // };

  // console.log(img);

  return (
    <div className="max-auto w-64">
      <div className="">
        <Avatar alt="Cindy Baker" src={photoURL} />
      </div>
      <input type="file" onChange={ handleimg } />
      <button  disabled={loading}  onClick={handlesave}>upload</button>
    </div>
  );
}
export default Updateprofile;

