import { useState } from "react";

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
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="flex justify-center mt-10 gap-10">
      {/* Left Column: Job List */}
      <div className="w-1/3">
        <div className="grid grid-cols-1 gap-5">
          {results.map((job) => (
            <div
              key={job.job_id}
              onClick={() => setSelectedJob(job)} // Set selected job on click
              className="cursor-pointer w-full flex gap-5 text-[#F5EFE7] dark:text-[#ECDFCC] p-6 bg-[#3E5879] dark:bg-gradient-to-tr dark:from-[#3C3D37] dark:to-[#1E201E] rounded-xl"
            >
              <div>
                {job.employer_logo ? (
                  <img
                    src={job.employer_logo}
                    alt={`${job.employer_name} logo`}
                    className="w-[60px] h-[60px] rounded-lg"
                  />
                ) : (
                  <div className="w-[60px] h-[60px] bg-gray-400 rounded-lg"></div>
                )}
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold">
                  {job.job_title || "Job Title Not Provided"}
                </h3>
                <p>{job.employer_name}</p>
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#9ca3af"
                  >
                    <path d="m12 17 1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2z"></path>
                    <path d="m16.267 10.563-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"></path>
                  </svg>
                  <p className="text-sm text-gray-400">
                    {job.job_city}, {job.job_state}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {results.length === 0 && (
            <p className="text-white">No results found</p>
          )}
        </div>
      </div>

      {/* Right Column: Job Details */}
      <div className="w-[40%]">
        {selectedJob ? (
          <div className="p-8 text-[#F5EFE7] dark:text-[#ECDFCC] bg-[#3E5879] dark:bg-gradient-to-tr dark:from-[#3C3D37] dark:to-[#1E201E] rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              {selectedJob.job_title || "Job Title Not Provided"}
            </h2>
            {selectedJob.employer_logo && (
              <img
                src={selectedJob.employer_logo}
                alt={`${selectedJob.employer_name} logo`}
                className="w-[120px] mb-4 rounded-lg"
              />
            )}
            <p className="mb-2">{selectedJob.employer_name}</p>
            <p className="mb-2">
              {selectedJob.job_city}, {selectedJob.job_state}
            </p>
            <p className="mb-4">
              {selectedJob.job_description
                .split("\n")
                .map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
            </p>
            {selectedJob.job_min_salary && selectedJob.job_max_salary && (
              <p className="mb-4">
                ${selectedJob.job_min_salary} - ${selectedJob.job_max_salary}{" "}
                {selectedJob.job_min_salary < 1000 ? "per hour" : "a year"}
              </p>
            )}
            {selectedJob.job_apply_link && (
              <button
                onClick={() =>
                  window.open(selectedJob.job_apply_link, "_blank")
                }
                className="bg-black hover:bg-[#000000a9] text-white w-[670px] py-2 px-4 rounded-md"
              >
                Apply Here
              </button>
            )}
          </div>
        ) : (
          <div className="p-8 text-gray-500">
            <p>Select a job to view more details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobResults;
