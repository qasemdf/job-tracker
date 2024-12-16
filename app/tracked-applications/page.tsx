"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/firebase/clientApp";
import {
  doc,
  deleteDoc,
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
  description: string;
}

const TrackedApplicationsPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [newApplication, setNewApplication] = useState({
    companyName: "",
    position: "",
    applicationDate: "",
    description: "",
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
      !newApplication.applicationDate ||
      !newApplication.description
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
  const handleDeleteApplication = async (id: string) => {
    try {
      const applicationDoc = doc(
        firestore,
        "users",
        user.uid,
        "applications",
        id
      );
      await deleteDoc(applicationDoc);

      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-20 h-screen bg-[#213555] dark:bg-[#1E201E] ">
      <main className="flex flex-col items-center flex-grow mt-10">
        <h1 className="text-4xl font-bold mb-6 dark:text-[#ECDFCC] text-[#F5EFE7]">
          Your Applications
        </h1>
        <div className="container mb-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-[#3E5879] dark:bg-[#3C3D37] mx-auto max-w-[700px] p-4 rounded shadow mb-4 flex justify-between"
            >
              <div>
                <h2 className="text-lg font-bold text-[#F5EFE7] dark:text-[#ECDFCC]">
                  {app.companyName}
                </h2>
                <p className="dark:text-[#ECDFCC] text-[#F5EFE7]">
                  {app.position}
                </p>
                <p className="dark:text-[#ECDFCC] text-[#F5EFE7]">
                  {app.description}
                </p>
                <p className="text-[#ecdfcc69]">{app.applicationDate}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleDeleteApplication(app.id)}
                  className="w-32 h-12 dark:bg-[#697565] bg-[#D8C4B6] dark:text-[#ECDFCC] text-[#F5EFE7] rounded-lg font-medium hover:bg-[#d8c4b6b4] focus:ring focus:ring-[#1b1b1b]"
                >
                  Delete
                </button>
                <button className="w-32 h-12 dark:bg-[#697565] bg-[#D8C4B6] dark:text-[#ECDFCC] text-[#F5EFE7] rounded-lg font-medium hover:bg-[#d8c4b6b4] focus:ring focus:ring-[#1b1b1b]">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="container flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-[#ECDFCC] text-[#F5EFE7]">
            Add New Application
          </h2>
          <div className="w-full max-w-[700px] mb-4">
            <input
              type="text"
              name="companyName"
              value={newApplication.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full max-w-[700px] p-2 border rounded dark:bg-[#3C3D37] bg-[#3E5879] dark:text-[#ECDFCC] text-[#F5EFE7] dark:placeholder-[#ECDFCC] placeholder-[#F5EFE7]"
            />
          </div>
          <div className="w-full max-w-[700px] mb-4">
            <input
              type="text"
              name="position"
              value={newApplication.position}
              onChange={handleInputChange}
              placeholder="Position"
              className="w-full max-w-[700px]  p-2 border rounded dark:bg-[#3C3D37] bg-[#3E5879] dark:text-[#ECDFCC] text-[#F5EFE7] dark:placeholder-[#ECDFCC] placeholder-[#F5EFE7]"
            />
          </div>
          <div className="w-full max-w-[700px] mb-4">
            <input
              type="text"
              name="description"
              value={newApplication.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full max-w-[700px]  p-2 border rounded dark:bg-[#3C3D37] bg-[#3E5879] dark:text-[#ECDFCC] text-[#F5EFE7] dark:placeholder-[#ECDFCC] placeholder-[#F5EFE7]"
            />
          </div>
          <div className="w-full max-w-[700px] mb-7">
            <input
              type="date"
              name="applicationDate"
              value={newApplication.applicationDate}
              onChange={handleInputChange}
              placeholder="Application Date"
              className="w-full max-w-[700px]  p-2 border rounded dark:bg-[#3C3D37] bg-[#3E5879] dark:text-[#ECDFCC] text-[#F5EFE7] dark:placeholder-[#ECDFCC]"
            />
          </div>
          <button
            onClick={handleAddApplication}
            className="px-4 py-2 dark:bg-[#697565] bg-[#D8C4B6] text-[#F5EFE7] dark:text-[#ECDFCC] rounded hover:bg-[#69756598]"
          >
            Add Application
          </button>
        </div>
      </main>
    </div>
  );
};

export default TrackedApplicationsPage;
