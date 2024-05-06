// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkr1WUIry-eI12Msp2RitktOJ1mox95ko",
  authDomain: "daily-tools-90892.firebaseapp.com",
  projectId: "daily-tools-90892",
  storageBucket: "daily-tools-90892.appspot.com",
  messagingSenderId: "500784618721",
  appId: "1:500784618721:web:fd187ba5f64a21b1ff6ba0",
  measurementId: "G-VZC7HTRKKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;