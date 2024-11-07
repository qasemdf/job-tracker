"use client";
import React, { useState } from "react";
import { searchJobs } from "../../api/rapidJobsAPI";
import JobResults from "./JobResults";

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

const JobSearchForm: React.FC = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [datePosted, setDatePosted] = useState<
    "all" | "today" | "3days" | "week" | "month"
  >("all");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const [results, setResults] = useState<Job[]>([]);
  const [error, setError] = useState<string>("");

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
      /* Logging results to check if data is retrieved*/
      console.log("API results:", results);
      console.log("Api results data: ", results?.data);

      setResults(results);
      setError("");
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs. Please try again later.");
      setResults([]);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className="text-black"
      >
        <label className="flex justify-center text-white text-[12px] font-semibold">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a job like frontend developer in Texas, USA"
            className="text-black w-full max-w-[740px] h-7 rounded-3xl relative p-4"
          />
        </label>

        <button
          type="submit"
          className="mt-5 text-[#000] p-2 font-medium w-[400px] absolute right-14 top-[56px] z-50 rounded-md"
        >
          Search Jobs
        </button>

        <label className="text-white text-[12px] font-semibold">
          Page:
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(parseInt(e.target.value))}
            min="1"
            max="10"
            className="text-black"
          />
        </label>

        {
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
        }

        <label className="text-white text-[12px] font-semibold">
          Date Posted:
          <select
            value={datePosted}
            onChange={(e) =>
              setDatePosted(
                e.target.value as "all" | "today" | "3days" | "week" | "month"
              )
            }
            className="text-black"
          >
            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="3days">Last 3 Days</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
          </select>
        </label>

        <label className="text-white text-[12px] font-semibold">
          Remote Jobs Only:
          <input
            type="checkbox"
            checked={remoteOnly}
            onChange={(e) => setRemoteOnly(e.target.checked)}
            className="text-black"
          />
        </label>
      </form>
      {error ? <p>{error}</p> : <JobResults results={results} />}
    </div>
  );
};

export default JobSearchForm;
