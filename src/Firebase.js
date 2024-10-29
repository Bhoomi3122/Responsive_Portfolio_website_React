// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Fir ebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAEeCv6XtUNCQ6ALCwoRtFewNv6L-BA0c",
  authDomain: "react-portfolio-bhoomi.firebaseapp.com",
  projectId: "react-portfolio-bhoomi",
  storageBucket: "react-portfolio-bhoomi.appspot.com",
  messagingSenderId: "36479165031",
  appId: "1:36479165031:web:9b09b982373aad35316ac2"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();