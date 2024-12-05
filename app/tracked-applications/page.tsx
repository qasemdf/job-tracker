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
  description: string;
  applicationDate: string;
}

const TrackedApplicationsPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [newApplication, setNewApplication] = useState({
    companyName: "",
    position: "",
    description: "",
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
      !newApplication.description ||
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

      setNewApplication({
        companyName: "",
        position: "",
        description: "",
        applicationDate: "",
      });
    } catch (error) {
      console.error("Error adding application:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-200">
      {/* Navbar */}
      <nav className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-semibold text-white">
            Tracked Applications
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center py-12">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-6 text-white text-center">
          Your Applications
        </h1>

        {/* Applications List */}
        <div className="w-full max-w-4xl space-y-4 mb-12">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-white">
                  {app.companyName}
                </h2>
                <p className="text-gray-400 font-bold">{app.position}</p>
                <p className="text-gray-400">{app.description}</p>
                <p className="text-gray-500 text-sm">{app.applicationDate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Application Section */}
        <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Add New Application
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="companyName"
              value={newApplication.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              name="position"
              value={newApplication.position}
              onChange={handleInputChange}
              placeholder="Position"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              value={newApplication.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500"
            />
            <input
              type="date"
              name="applicationDate"
              value={newApplication.applicationDate}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring focus:ring-blue-500"
            />
            <button
              onClick={handleAddApplication}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring focus:ring-blue-500"
            >
              Add Application
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackedApplicationsPage;
