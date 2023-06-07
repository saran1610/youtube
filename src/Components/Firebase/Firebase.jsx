// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,serverTimestamp} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5gmB9_XA3pyDq7Myev53Gkp7iPjk7EWE",
  authDomain: "clone-9cb41.firebaseapp.com",
  projectId: "clone-9cb41",
  storageBucket: "clone-9cb41.appspot.com",
  messagingSenderId: "882086424959",
  appId: "1:882086424959:web:8859c0b474b36c0029ea4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore();
const auth =getAuth();
const provider =new GoogleAuthProvider();
const timestamp = serverTimestamp();

export {app,db,auth,provider,timestamp};