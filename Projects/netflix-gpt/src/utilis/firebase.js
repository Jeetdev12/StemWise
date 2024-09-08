// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzTgBcr5IeXn204cmBWJpU6t9w-_sIqEs",
    authDomain: "netflix-gpt-dd457.firebaseapp.com",
    projectId: "netflix-gpt-dd457",
    storageBucket: "netflix-gpt-dd457.appspot.com",
    messagingSenderId: "1025490189678",
    appId: "1:1025490189678:web:0bd160753b65f9f9e9557f",
    measurementId: "G-DZBCR7RBG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);