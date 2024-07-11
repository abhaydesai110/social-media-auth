// pages/api/auth/instagram.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const INSTAGRAM_CLIENT_ID = "440824258771718";
const INSTAGRAM_CLIENT_SECRET = "89da8248077f2ada3140b122246ce21b";
const INSTAGRAM_REDIRECT_URI =
  "https://8b25-2409-40c1-43-502a-1591-4d81-2189-bad7.ngrok-free.app";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (!code) {
    const redirectUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${INSTAGRAM_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    res.redirect(redirectUrl);
  } else {
    try {
      const response = await axios.post(
        "https://api.instagram.com/oauth/access_token",
        {
          client_id: INSTAGRAM_CLIENT_ID,
          client_secret: INSTAGRAM_CLIENT_SECRET,
          grant_type: "authorization_code",
          redirect_uri: INSTAGRAM_REDIRECT_URI,
          code,
        }
      );

      const { access_token } = response.data;

      const customToken = await admin.auth().createCustomToken(access_token);

      res.status(200).json({ token: customToken });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
