// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNPc6uAmZEGhGfY5kQ7fH0QMfnnxntBEY",
  authDomain: "simple-firebase-92b4d.firebaseapp.com",
  projectId: "simple-firebase-92b4d",
  storageBucket: "simple-firebase-92b4d.appspot.com",
  messagingSenderId: "663064018089",
  appId: "1:663064018089:web:b2b58ee5a879d051773db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default app 