"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import { auth } from "@/firebase/clientApp";

const changePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const PasswordChange = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (newPassword != confirmNewPassword) {
      setError("New passwords do not match");
      return;
    }

    try {
      const user = auth.currentUser;
      if (user && user.email) {
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        setMessage("Password change success");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        setError("No user is currently signed in.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error has occurred");
      }
    }
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-600 to-black flex justify-center items-center">
      <div className="max-w-md w-full p-6 border border-gray-300 rounded">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Change Password
        </h2>
        <form onSubmit={PasswordChange} className="space-y-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="text-sm font-medium block mb-2 text-gray-300"
            >
              Current Password
            </label>
            <input
              type="password"
              id="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="border-2 outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="text-sm font-medium block mb-2 text-gray-300"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="border-2 outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="confirmNewPassword"
              className="text-sm font-medium block mb-2 text-gray-300"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
              className="border-2 outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default changePasswordPage;
