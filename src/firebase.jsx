import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRBVTq7JvwEQegO1GZau-zI_YNugxjwxk",
  authDomain: "printapp-e7875.firebaseapp.com",
  projectId: "printapp-e7875",
  storageBucket: "printapp-e7875.appspot.com",
  messagingSenderId: "1073037120175",
  appId: "1:1073037120175:web:a9104087683737c21e7a5a",
  measurementId: "G-LX2HW6NBG9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);