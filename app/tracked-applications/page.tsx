"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/firebase/clientApp";
import {
  doc,
  getDoc,
  collection,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";

interface JobApplication {
  id: string;
  companyName: string;
  position: string;
  applicationDate: string;
}

const TrackedApplicationsPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [newApplication, setNewApplication] = useState({
    companyName: "",
    position: "",
    applicationDate: "",
  });
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        try {
          const applicationsRef = collection(
            firestore,
            "users",
            currentUser.uid,
            "applications"
          );
          const q = query(applicationsRef);
          const querySnapshot = await getDocs(q);

          const fetchedApplications: JobApplication[] = [];
          querySnapshot.forEach((doc) => {
            fetchedApplications.push({
              id: doc.id,
              ...doc.data(),
            } as JobApplication);
          });

          setApplications(fetchedApplications);
        } catch (error) {
          console.error("Error fetching applications:", error);
        }
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewApplication({ ...newApplication, [e.target.name]: e.target.value });
  };

  const handleAddApplication = async () => {
    if (
      !newApplication.companyName ||
      !newApplication.position ||
      !newApplication.applicationDate
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const applicationsRef = collection(
        firestore,
        "users",
        user.uid,
        "applications"
      );
      await addDoc(applicationsRef, newApplication);

      setApplications((prev) => [
        ...prev,
        { id: Date.now().toString(), ...newApplication },
      ]);

      setNewApplication({ companyName: "", position: "", applicationDate: "" });
    } catch (error) {
      console.error("Error adding application:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-100 bg-gradient-to-b from-gray-600 to-black">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-white text-xl">Tracked Applications</div>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center flex-grow mt-10">
        <h1 className="text-4xl font-bold mb-6">Your Applications</h1>
        <div className="w-3/4 mb-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white p-4 rounded shadow mb-4 flex justify-between"
            >
              <div>
                <h2 className="text-lg font-bold">{app.companyName}</h2>
                <p>{app.position}</p>
                <p>{app.applicationDate}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">Add New Application</h2>
          <div className="mb-4">
            <input
              type="text"
              name="companyName"
              value={newApplication.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="position"
              value={newApplication.position}
              onChange={handleInputChange}
              placeholder="Position"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="applicationDate"
              value={newApplication.applicationDate}
              onChange={handleInputChange}
              placeholder="Application Date"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleAddApplication}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Application
          </button>
        </div>
      </main>
    </div>
  );
};

export default TrackedApplicationsPage;
