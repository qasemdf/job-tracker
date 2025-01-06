"use client";

import JobSearchForm from "../components/ui/jobSearch";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, firestore } from "@/firebase/clientApp";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { BackgroundBeams } from "../helper components/BackgrounBeamSetup";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        const registrationData = localStorage.getItem("registrationData");
        const {
          firstName = "",
          lastName = "",
          gender = "",
        } = registrationData ? JSON.parse(registrationData) : {};

        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(firestore, "users", user.uid), {
            firstName,
            lastName,
            gender,
            email: user.email,
          });
        }
        router.push("/");
      } else {
        setError("Please verify your email before logging in.");
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "An unknown error has occurred."
      );
    }
  };

  const handleGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="pt-20 flex justify-center min-h-screen">
      <div className="p-5 rounded-lg max-w-[550px] w-full z-50">
        <h2 className="text-white text-3xl font-medium mb-3">Login</h2>
        <p className="text-white mb-8">
          Enter your email and password to login
        </p>
        <form onSubmit={handleLogin} className="space-y-6 container">
          <div className="container">
            <label
              htmlFor="email"
              className="text-sm font-medium block mb-2 text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-[rgba(215,215,215,0.4)] outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-black placeholder-gray-400 text-white"
            />
          </div>
          <div className="container">
            <label
              htmlFor="password"
              className="text-sm font-medium block mb-2 text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-[rgba(215,215,215,0.4)] outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-black placeholder-gray-400 text-white"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>

          <div className="container">
            <label htmlFor="remember" className="mr-[40%] text-white">
              <input type="checkbox" id="remember" className="mt-7" /> remember
              me
            </label>
            <span className="text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>
        </form>
        <p className="text-gray-400 text-sm text-center mt-4 mb-7">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register Here
          </Link>
        </p>
        <p className="mb-2 text-white">Or continue with</p>
        <div className="flex gap-5 justify-center">
          <button
            onClick={handleGoogle}
            className="w-[220px] border border-[rgba(215,215,215,0.4)] rounded-lg h-[35px] bg-black text-white"
          >
            Google
          </button>
          <button className="w-[220px] border border-[rgba(215,215,215,0.4)] rounded-lg h-[35px] bg-black text-white">
            Github
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default LoginPage;
