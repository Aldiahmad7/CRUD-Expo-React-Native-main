// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALwz7kOLSctv7a0Tie-yEl8jvE4IZ6Xpo",
  authDomain: "tugas-4184d.firebaseapp.com",
  projectId: "tugas-4184d",
  storageBucket: "tugas-4184d.firebasestorage.app",
  messagingSenderId: "401650540617",
  appId: "1:401650540617:web:2221d18bbe8d51739a9f98",
  measurementId: "G-EC4NT87RXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };