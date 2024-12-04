// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm1oVayyM_6xk0KiT4yogpHrQzwa5bKoU",
  authDomain: "coffee-store-4db5d.firebaseapp.com",
  projectId: "coffee-store-4db5d",
  storageBucket: "coffee-store-4db5d.firebasestorage.app",
  messagingSenderId: "388563854855",
  appId: "1:388563854855:web:b02dc5ae5ae1f100e52ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);