// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIEt9wo7QBlIZM_U4i6qbWh1SDXTnOkDE",
  authDomain: "streamwise-816f4.firebaseapp.com",
  projectId: "streamwise-816f4",
  storageBucket: "streamwise-816f4.firebasestorage.app",
  messagingSenderId: "792673511265",
  appId: "1:792673511265:web:da3fb392d95b35a80f0720",
  measurementId: "G-D59QM063D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);