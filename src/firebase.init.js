// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRXVHDeRpIG9oqyiFpEQ9Vs_kI3tJfY_o",
  authDomain: "auth-integrations-3b71c.firebaseapp.com",
  projectId: "auth-integrations-3b71c",
  storageBucket: "auth-integrations-3b71c.firebasestorage.app",
  messagingSenderId: "357840583697",
  appId: "1:357840583697:web:accd7580e84ea722a005b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);