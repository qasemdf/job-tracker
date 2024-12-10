"use client";

import Video from "@/app/Extra Components/Video";

import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

function TripleInfoCards() {
  return (
    <div className="flex flex-col w-full gap-10 mt-36 text-[#ECDFCC]">
      <div className="w-[1000px] mx-auto text-center">
        <h1
          className={` ${staatliches.className} tracking-wide text-4xl mb-10`}
        >
          Search, Apply, and Track Simplify Your Job Hunt in Three Easy Steps
        </h1>
      </div>
      <div className="flex gap-10 justify-center items-center w-full">
        <div className="w-full max-w-[500px] h-[300px] rou border border-white bg-transparent">
          <img
            src="/Videos/searchgif.gif"
            alt="video breaking down how to use the job tracker"
          />
        </div>
        <div className="w-[500px]">
          <h2
            className={` ${staatliches.className} tracking-widest font-bold text-xl mb-3`}
          >
            Search
          </h2>
          <p className={` ${quicksand.className}`}>
            Effortlessly find the jobs that align with your skills and
            aspirations. Use filters to refine your search by location,
            industry, or role to discover opportunities that matter most to you.
          </p>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-center w-full">
        <div className="w-full max-w-[500px] h-[300px] rou border border-white bg-transparent">
          <img
            src="/Videos/applygif.gif"
            alt="video breaking down how to use the job tracker"
          />
        </div>
        <div className="w-[500px]">
          <h2
            className={` ${staatliches.className} tracking-widest font-bold text-xl mb-3`}
          >
            Apply
          </h2>
          <p className={` ${quicksand.className}`}>
            Quickly explore application links and resources for your selected
            jobs. We guide you to the right places, ensuring you’re always ready
            to take the next step toward your dream career.
          </p>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-center w-full">
        <div className="w-full max-w-[500px] h-[300px] rou border border-white bg-transparent">
          <img
            src="/Videos/ShowcaseGif.gif"
            alt="video breaking down how to use the job tracker"
          />
        </div>
        <div className="w-[500px]">
          <h2
            className={` ${staatliches.className} tracking-widest font-bold text-xl mb-3`}
          >
            Track
          </h2>
          <p className={` ${quicksand.className}`}>
            Stay on top of your job search by saving and organizing your
            favorite listings. Monitor application deadlines and revisit key
            opportunities whenever you need to, ensuring no opportunity slips
            through the cracks.
          </p>
        </div>
      </div>
    </div>
  );
}
export default TripleInfoCards;
