"use client";
import React, { useEffect, useState } from "react";

const clientSecret = "uLmYKvgG5sHr6IO5KskcSpuGA2Dodd";
const clientId = "odduLmYKvgG5sHr6IO5KskcSpuGA2D";
const redirectUri = "https://yourapplication.com/callback";
const state = "vgG5sHr6";

const authorizeUser = () => {
  const audience = "https://api.lever.co/v1/";
  const scope = "opportunities:read:admin";

  const authUrl = `https://auth.lever.co/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&response_type=code&scope=${scope}&audience=${audience}`;

  window.location.href = authUrl;
};

const LeverAuthComponent = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const returnedState = urlParams.get("state");

    if (code && returnedState === state) {
      exchangeCodeForToken(code);
    }
  }, []);

  const exchangeCodeForToken = async (code: string) => {
    const tokenUrl = "https://auth.lever.co/oauth/token";
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    });

    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Token request failed");
      }

      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error(
        "Failed to exchange authorization code for access token",
        error
      );
    }
  };

  return (
    <div>
      <button
        onClick={authorizeUser}
        className="mt-5 text-white p-2 font-medium w-[400px] rounded-md bg-[#FF6500]"
      >
        Authorize with Lever
      </button>
      {accessToken}
    </div>
  );
};

export default LeverAuthComponent;
