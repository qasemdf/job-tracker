"use client";
import React, { useState } from "react";
import { searchJobs } from "../api/rapidJobsAPI";

const JobSearchForm: React.FC = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [datePosted, setDatePosted] = useState<
    "all" | "today" | "3days" | "week" | "month"
  >("all");
  const [remoteOnly, setRemoteOnly] = useState(false);

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
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <label>
        Query:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <label>
        Page:
        <input
          type="number"
          value={page}
          onChange={(e) => setPage(parseInt(e.target.value))}
          min="1"
          max="10"
        />
      </label>

      <label>
        Number of Pages:
        <input
          type="number"
          value={numPages}
          onChange={(e) => setNumPages(parseInt(e.target.value))}
          min="1"
          max="10"
        />
      </label>

      <label>
        Date Posted:
        <select
          value={datePosted}
          onChange={(e) =>
            setDatePosted(
              e.target.value as "all" | "today" | "3days" | "week" | "month"
            )
          }
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="3days">Last 3 Days</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
        </select>
      </label>

      <label>
        Remote Jobs Only:
        <input
          type="checkbox"
          checked={remoteOnly}
          onChange={(e) => setRemoteOnly(e.target.checked)}
        />
      </label>

      <button type="submit">Search Jobs</button>
    </form>
  );
};

export default JobSearchForm;
