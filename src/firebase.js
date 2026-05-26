// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1o0eGN4sXp0kdmpfDmtjMXK9ndPmBBwU",
  authDomain: "balaji-institutes-nursing.firebaseapp.com",
  projectId: "balaji-institutes-nursing",
  storageBucket: "balaji-institutes-nursing.firebasestorage.app",
  messagingSenderId: "98120940525",
  appId: "1:98120940525:web:4583d68500b8f194ecc5e4",
  measurementId: "G-TJDS9QDYJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);