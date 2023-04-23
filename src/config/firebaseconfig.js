import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDhOjVuxgVi99tOnHKi6gQ5fhxgBEUTmkg",
  authDomain: "react-firebase-54850.firebaseapp.com",
  projectId: "react-firebase-54850",
  storageBucket: "react-firebase-54850.appspot.com",
  messagingSenderId: "604709565916",
  appId: "1:604709565916:web:e6c042ddeee4a8d2ce0b19",
  measurementId: "G-6XYGDMNR3H"
};
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export const googleProvider = new GoogleAuthProvider()