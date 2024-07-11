// "use client";
// // src/TwitterSignIn.js
// import React from "react";
// import { auth } from "./firebase";
// import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

// const TwitterSignIn = () => {
//   const signInWithTwitter = async () => {
//     const provider = new TwitterAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log(result.user);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return <button onClick={signInWithTwitter}>Sign in with Twitter</button>;
// };

// export default TwitterSignIn;
