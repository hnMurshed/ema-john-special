import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc12Fk-y9fvWg26j0WZ4f8Z9Vs9Ei4t4Y",
  authDomain: "ema-john-special.firebaseapp.com",
  projectId: "ema-john-special",
  storageBucket: "ema-john-special.appspot.com",
  messagingSenderId: "318879503856",
  appId: "1:318879503856:web:5d62671352b91282963935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;