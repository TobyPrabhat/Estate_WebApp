// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-mern-estate.firebaseapp.com",
  projectId: "my-mern-estate",
  storageBucket: "my-mern-estate.appspot.com",
  messagingSenderId: "384300841857",
  appId: "1:384300841857:web:724ba1e1bb1cac79ac8680"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);