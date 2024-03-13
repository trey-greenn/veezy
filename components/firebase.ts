import firebase from "firebase/compat/app";
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyBdd-oCh3osBfWpqW0Bl6MpHk4Ta-AwrkE",
  authDomain: "veery-a9c22.firebaseapp.com",
  projectId: "veery-a9c22",
  storageBucket: "veery-a9c22.appspot.com",
  messagingSenderId: "714930346150",
  appId: "1:714930346150:web:30d478101ed638b8b1fc67"
}).auth();

// Initialize Firebase
