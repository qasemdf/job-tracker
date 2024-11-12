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
    <div className="flex justify-center items-center mt-10">
      <div className="grid grid-cols-2 gap-20">
        {results.map((job) => (
          <div
            key={job.job_id}
            className=" w-full max-w-[650px] flex gap-5 text-white p-12 rounded-xl"
            style={{ background: "linear-gradient(260deg, #31511E, #859F3D" }}
          >
            <div>
              {job.employer_logo ? (
                <img
                  src={job.employer_logo}
                  alt={`${job.employer_name} logo`}
                  className="w-[180px] rounded-lg"
                />
              ) : (
                <div className="w-[60px]"></div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h3>{job.job_title || "Job Title Not Provided"}</h3>
              <p>{job.employer_name}</p>

              <p>
                {job.job_city}, {job.job_state}
              </p>

              <p className="">{job.job_description.slice(0, 200)}...</p>

              {job.job_min_salary && job.job_max_salary && (
                <p className="">
                  ${job.job_min_salary} - ${job.job_max_salary}{" "}
                  {job.job_min_salary < 1000 ? "per hour" : "a year"}
                </p>
              )}

              {job.job_apply_link && (
                <a
                  href={job.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black p-2 rounded-md mt-4 w-[180px]">
                    Apply Here
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}

        {results.length === 0 && <p className="text-white">No results found</p>}
      </div>
    </div>
  );
};

export default JobResults;
