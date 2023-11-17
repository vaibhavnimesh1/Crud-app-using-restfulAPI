// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLGubtxD7gzTN_24ywQZoswSnE0tLkht0",
  authDomain: "netflix-gpt-77489.firebaseapp.com",
  projectId: "netflix-gpt-77489",
  storageBucket: "netflix-gpt-77489.appspot.com",
  messagingSenderId: "261752584264",
  appId: "1:261752584264:web:4819aa1d8616e1ac90007d",
  measurementId: "G-7ZQRZ7XQT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();