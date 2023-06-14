// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCzvVYsMBf74MPtvDTj33t2cRfXPGh_38",
  authDomain: "clone-426c2.firebaseapp.com",
  projectId: "clone-426c2",
  storageBucket: "clone-426c2.appspot.com",
  messagingSenderId: "39615068114",
  appId: "1:39615068114:web:9ecf1109509335074e7a0b",
  measurementId: "G-68Q38YHK0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);