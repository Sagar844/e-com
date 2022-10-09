
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut ,updateProfile } from "firebase/auth";
import { getStorage, uploadBytes ,ref} from "firebase/storage";
import { useEffect, useState } from "react";

import {   getDownloadURL } from 'firebase/storage'; 


const firebaseConfig = {
  apiKey: "AIzaSyBkc1eLfhdaUuPFWAaYt51yczphLj5yJpA",
  authDomain: "my-second-project-4a5b9.firebaseapp.com",
  projectId: "my-second-project-4a5b9",
  storageBucket: "my-second-project-4a5b9.appspot.com",
  messagingSenderId: "576279998307",
  appId: "1:576279998307:web:c48bf72f01760e27ec2d56",
  measurementId: "G-923PH2BYR7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const storage =getStorage();
export function logout(){
return signOut(auth);
}



export function useAuth(){

  const [currentUser, setcurrentuser] =useState();


useEffect(() =>{
const unsub = onAuthStateChanged(auth,user => setcurrentuser(user));
return(unsub); 

}, [])
return currentUser;

}
// storage

export async function uploads(file,currentUser,setloading){

  const fileRef = ref(storage,currentUser.uid +'.jpg' );
  setloading(true)
  const snapshot= await uploadBytes(fileRef,file);
 const photoURL=await getDownloadURL(fileRef);

updateProfile(currentUser,{photoURL});

  setloading(false);
  alert("upload Profile Picture")
}

export { app, auth };
