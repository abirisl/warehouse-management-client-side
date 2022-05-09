// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXbyQlGs4WyP1mu-GZRmbsPuv2v0Zuq8E",
  authDomain: "bike-warehouse-6f51e.firebaseapp.com",
  projectId: "bike-warehouse-6f51e",
  storageBucket: "bike-warehouse-6f51e.appspot.com",
  messagingSenderId: "27609726505",
  appId: "1:27609726505:web:72bc63b333c816b0b4e638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;