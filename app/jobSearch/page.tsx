"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, firestore } from "@/firebase/clientApp";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { searchJobs } from "../api/rapidJobsAPI";
import JobResults from "../components/ui/JobResults";

interface Job {
  job_id: string;
  job_title: string | null;
  employer_name: string;
  employer_logo: string | null;
  job_description: string;
  job_city: string;
  job_state: string;
  job_min_salary: number | null;
  job_max_salary: number | null;
  job_apply_link: string | null;
}

const JobSearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [datePosted, setDatePosted] = useState<
    "all" | "today" | "3days" | "week" | "month"
  >("all");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [results, setResults] = useState<Job[]>([]);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.emailVerified) {
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          const registrationData = localStorage.getItem("registrationData");
          const {
            firstName = "",
            lastName = "",
            gender = "",
          } = registrationData ? JSON.parse(registrationData) : {};
          await setDoc(doc(firestore, "users", user.uid), {
            firstName,
            lastName,
            gender,
            email: user.email,
          });
          localStorage.removeItem("registrationData");
        }
        setUser(user);
      } else {
        router.push("/login");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const results = await searchJobs({
        query,
        page,
        num_pages: numPages,
        date_posted: datePosted,
        remote_jobs_only: remoteOnly,
      });
      setResults(results);
      setError("");
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs. Please try again later.");
      setResults([]);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-12">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className="text-black"
      >
        <div className="flex justify-center items-center ">
          <label className="items-center relative w-full max-w-[1400px] mt-10 mb-7">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a job like frontend developer in Texas, USA"
              className="text-black w-full h-10 rounded-3xl pl-4 pr-20"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform rounded-3xl -translate-y-1/2 text-[#000] p-2 font-medium bg-transparent rounded-md"
            >
              Search Jobs
            </button>
          </label>
        </div>

        {/*
          <label className="text-white text-[12px] font-semibold">
            Number of Pages:
            <input
              type="number"
              value={numPages}
              onChange={(e) => setNumPages(parseInt(e.target.value))}
              min="1"
              max="10"
              className="text-black"
            />
          </label>
        */}

        <div className="flex gap-10 w-full justify-end pr-[480px]">
          <label className="text-white text-[17px] font-semibold">
            Date Posted{" "}
            <select
              value={datePosted}
              onChange={(e) =>
                setDatePosted(
                  e.target.value as "all" | "today" | "3days" | "week" | "month"
                )
              }
              className="text-black "
            >
              <option value="all">All</option>
              <option value="today">Today</option>
              <option value="3days">Last 3 Days</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
            </select>
          </label>

          <label className="text-white text-[17px] font-semibold">
            Remote Jobs Only{" "}
            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => setRemoteOnly(e.target.checked)}
              className="text-black"
            />
          </label>
        </div>

        {error ? <p>{error}</p> : <JobResults results={results} />}

        <div className="flex flex-col text-white text-[12px] font-semibold flex justify-center items-center gap-2 mt-12">
          <span className="text-[25px] text-[#ECDFCC]">Page {page}</span>
          <div className="flex gap-4 mb-5">
            <button
              type="submit"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="bg-[#697565] text-[#ECDFCC] text-lg font-semibold px-5 py-1 rounded-md "
            >
              prev
            </button>
            <button
              type="submit"
              onClick={() => setPage((prev) => Math.min(prev + 1, 10))}
              className="bg-[#697565] text-[#ECDFCC] text-lg font-semibold px-5 py-1 rounded-md"
            >
              next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobSearchPage;
