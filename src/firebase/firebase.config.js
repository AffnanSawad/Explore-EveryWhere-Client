// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIgHUEpv1QwWodbB0KgQ6F1gDfDhlsnxg",
  authDomain: "explore-everywhere.firebaseapp.com",
  projectId: "explore-everywhere",
  storageBucket: "explore-everywhere.appspot.com",
  messagingSenderId: "425583910249",
  appId: "1:425583910249:web:7e707ccca766d9370ef1f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth ;