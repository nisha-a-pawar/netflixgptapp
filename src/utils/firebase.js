// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDkOZlYCwhAhGGH-slmgeH9LCQOw1NRJiA",
    authDomain: "netflixgpt-598cc.firebaseapp.com",
    projectId: "netflixgpt-598cc",
    storageBucket: "netflixgpt-598cc.firebasestorage.app",
    messagingSenderId: "223919428156",
    appId: "1:223919428156:web:38c77e48e03a23af922939"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();