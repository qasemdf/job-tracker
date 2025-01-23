"use client";
import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { useRouter } from "next/navigation";

const forgotPasswordPage = () => {
  const router = useRouter();
  const forgotPasswordInput = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, emailVal);
      alert("Check your email for a reset link.");
      router.push("/login");
    } catch (error) {
      console.error("Error resetting password: ", error.message);
    }
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-600 to-black flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 border border-gray-300 rounded">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Forgot Password
        </h2>
        <form className="space-y-6" onSubmit={forgotPasswordInput}>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium block mb-2 text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="border-2 outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Password Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default forgotPasswordPage;
