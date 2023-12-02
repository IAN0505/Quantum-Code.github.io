// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7KgUeZVtTBr4_GgJphJrl59crGi46boQ",
  authDomain: "signup-42130.firebaseapp.com",
  projectId: "signup-42130",
  storageBucket: "signup-42130.appspot.com",
  messagingSenderId: "255342614484",
  appId: "1:255342614484:web:f1f6cef992e2e6d63a2841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;

