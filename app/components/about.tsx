// components/JobSearch.tsx

import { useState } from 'react';

const fetchJobs = async (query: string, page = 1, num_pages = 1, date_posted = 'all') => {
  try {
    const response = await fetch(
      `/api/jobs?query=${encodeURIComponent(query)}&page=${page}&num_pages=${num_pages}&date_posted=${date_posted}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch jobs error:', error);
    throw error;
  }
};

export default function JobSearch() {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      const data = await fetchJobs(query);
      setJobs(data.data || []); // assuming 'data' field contains job data
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for jobs..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {jobs.map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
