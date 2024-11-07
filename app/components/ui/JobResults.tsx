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

interface JobResultsProps {
  results: Job[];
}

const JobResults: React.FC<JobResultsProps> = ({ results = [] }) => {
  console.log("Rendering job results: ", results);
  return (
    <div className="job-results">
      <div className="job-results">
        {results.map((job) => (
          <div key={job.job_id} className="text-white">
            {job.employer_logo ? (
              <img
                src={job.employer_logo}
                alt={`${job.employer_name} logo`}
                className="employer-logo"
              />
            ) : (
              <div className="">No Logo</div>
            )}

            <h3>{job.job_title || "Job Title Not Provided"}</h3>
            <p>Company: {job.employer_name}</p>

            <p>
              Location: {job.job_city}, {job.job_state}
            </p>

            <p className="">{job.job_description.slice(0, 150)}...</p>

            {job.job_apply_link && (
              <a
                href={job.job_apply_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Here
              </a>
            )}

            {job.job_min_salary && job.job_max_salary && (
              <p>
                Salary: ${job.job_min_salary} - ${job.job_max_salary} per hour
              </p>
            )}
          </div>
        ))}

        {results.length === 0 && <p className="text-white">No results found</p>}
      </div>
    </div>
  );
};

export default JobResults;
