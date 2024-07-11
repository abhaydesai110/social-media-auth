// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbLvZIehPBcMubC7MxOW1m96ObTqE6lrk",
  authDomain: "facebook-sign-in-eb55c.firebaseapp.com",
  projectId: "facebook-sign-in-eb55c",
  storageBucket: "facebook-sign-in-eb55c.appspot.com",
  messagingSenderId: "815110914380",
  appId: "1:815110914380:web:4c29551bfc6f1069008fe9",
  measurementId: "G-G32RJWVG5F",
};

// Initialize Firebase
const appFaceBook = initializeApp(firebaseConfig);
export const auth = getAuth(appFaceBook);
