import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS4ZHIDrgT-v1WN9qP1tqA3xG3SQmahJ0",
  authDomain: "react-js-14a1d.firebaseapp.com",
  projectId: "react-js-14a1d",
  storageBucket: "react-js-14a1d.appspot.com",
  messagingSenderId: "884551051104",
  appId: "1:884551051104:web:1e1c17b7150f747a8e6005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);