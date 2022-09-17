
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const storage = getStorage();
export function logout(){
return signOut(auth);
}

export { app, auth, storage };
