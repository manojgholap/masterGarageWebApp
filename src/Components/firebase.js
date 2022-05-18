// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh80GoOKENShIVeZx5ggGwPDeCQXd4OqY",
  authDomain: "react-login-page-fe1f4.firebaseapp.com",
  projectId: "react-login-page-fe1f4",
  storageBucket: "react-login-page-fe1f4.appspot.com",
  messagingSenderId: "355966753811",
  appId: "1:355966753811:web:0363b62d7c1e1fd29f33e6",
  measurementId: "G-7E1NTZD69P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;