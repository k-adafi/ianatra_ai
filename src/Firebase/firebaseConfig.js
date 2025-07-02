// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpcQPjZN7tfkGHVO1YDwvQhnwJq0FEASo",
  authDomain: "ianatrabdd.firebaseapp.com",
  projectId: "ianatrabdd",
  storageBucket: "ianatrabdd.firebasestorage.app",
  messagingSenderId: "1021745395661",
  appId: "1:1021745395661:web:d439b324e92e9cc7c9b684",
  measurementId: "G-0SWC7GEK3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();