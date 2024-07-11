"use client";
// Login.js
import React from "react";
import { auth } from "./firebaseFacebook";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth, facebookProvider } from "./firebaseConfig";

const FacebookSignIn = () => {
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
};

export default FacebookSignIn;
