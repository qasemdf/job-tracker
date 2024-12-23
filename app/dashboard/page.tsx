"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(`${userData.firstName} ${userData.lastName}`);
          console.log("Fetched userName:", userName);
        }
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleChangePassword = () => {
    router.push("/changePassword");
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#213555] dark:bg-[#1E201E]">
      <div className="absolute pt-20 left-0 top-0 max-w-[500px] w-full h-full bg-black shadow-lg">
        <h1 className="text-xl text-center text-[#F5EFE7] dark:text-[#ECDFCC] font-bold mb-6 ml-10 ">
          Welcome, {userName}!
        </h1>
        <div className="flex justify-center items-center gap-6">
          <button
            className="text-white bg-[#3E5879] p-2 rounded-md"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
          <button
            className="text-white bg-[#3E5879] p-2 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
