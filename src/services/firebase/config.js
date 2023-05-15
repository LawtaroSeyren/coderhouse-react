// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ironclad-1e469.firebaseapp.com",

  projectId: "ironclad-1e469",

  storageBucket: "ironclad-1e469.appspot.com",

  messagingSenderId: "1004653364626",

  appId: "1:1004653364626:web:1f315888211d74d42d6d4b"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)