import React from 'react';
import { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Avatar from '@mui/material/Avatar';

function Uploadimg() {
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState(null);

  const handleimg = e => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };
  const handlesave = () => {
    const imgRef = ref(storage, 'img');
    uploadBytes(imgRef, img)
      .then(() => {
        getDownloadURL(imgRef)
          .then(url => {
            setUrl(url);
          })
          .catch(error => {
            console.log(error.message, 'error');
          });

        setImg(null);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  console.log(img);

  return (
    <div className="max-auto w-64">
      <div className="">
        <Avatar alt="Cindy Baker" src={url} />
      </div>
      <input type="file" onChange={handleimg} />
      <button onClick={handlesave}>save</button>
    </div>
  );
}

export default Uploadimg;
