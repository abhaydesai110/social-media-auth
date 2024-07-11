// pages/index.tsx
"use client";
import { useEffect } from "react";
import axios from "axios";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { auth } from "./firebaseFacebook";
import { useRouter, useSearchParams } from "next/navigation";

const InstagramLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const NEXT_PUBLIC_INSTAGRAM_CLIENT_ID = "440824258771718";
  const NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI =
    "http://localhost:3000/api/auth/instagram/callback";

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      (async () => {
        try {
          const response = await axios.get(`/api/auth/instagram?code=${code}`);
          const { token } = response.data;
          await signInWithCustomToken(auth, token);
          router.push("/");
        } catch (error) {
          console.error("Error during Instagram authentication:", error);
        }
      })();
    }
  }, [searchParams]);

  const handleInstagramLogin = () => {
    const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}&redirect_uri=${NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    window.location.href = instagramAuthUrl;
  };

  return (
    <div>
      <button onClick={handleInstagramLogin}>Login with Instagram</button>
    </div>
  );
};

export default InstagramLogin;
