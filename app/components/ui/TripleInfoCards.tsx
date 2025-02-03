"use client";

import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

import { Reveal } from "@/app/helper components/Reveal";

function TripleInfoCards() {
  return (
    <div className="flex flex-col w-full gap-10 mt-36 text-[#F5EFE7] dark:text-[#ECDFCC]">
      <div className="w-[1000px] mx-auto text-center">
        <Reveal>
          <h1
            className={` ${staatliches.className} tracking-wide text-4xl mb-10`}
          >
            Search, Apply, and Track Simplify Your Job Hunt in Three Easy Steps
          </h1>
        </Reveal>
      </div>
      <div className="flex gap-10 justify-center items-center w-full">
        <Reveal>
          <div className="w-full max-w-[500px] h-[300px] rou border dark:border-white border-transparent  bg-transparent">
            <img
              src="/Videos/searchgif.gif"
              alt="video breaking down how to use the job tracker"
            />
          </div>
        </Reveal>
        <div className="w-[500px]">
          <Reveal>
            <h2
              className={` ${staatliches.className} tracking-widest font-bold text-xl mb-3`}
            >
              Search
            </h2>
          </Reveal>
          <Reveal>
            <p className={` ${quicksand.className}`}>
              Effortlessly find the jobs that align with your skills and
              aspirations. Use filters to refine your search by location,
              industry, or role to discover opportunities that matter most to
              you.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-center w-full">
        <Reveal>
          <div className="w-full max-w-[500px] h-[300px] rou border dark:border-white border-transparent bg-transparent">
            <img
              src="/Videos/applygif.gif"
              alt="video breaking down how to use the job tracker"
            />
          </div>
        </Reveal>
        <div className="w-[500px]">
          <Reveal>
            <h2
              className={` ${staatliches.className} tracking-widest font-bold text-xl mb-3`}
            >
              Apply
            </h2>
          </Reveal>
          <Reveal>
            <p className={` ${quicksand.className}`}>
              Quickly explore application links and resources for your selected
              jobs. We guide you to the right places, ensuring you’re always
              ready to take the next step toward your dream career.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-center w-full">
        <Reveal>
          <div className="w-full max-w-[500px] h-[300px] rou border dark:border-white border-transparent  bg-transparent">
            <img
              src="/Videos/ShowcaseGif.gif"
              alt="video breaking down how to use the job tracker"
            />
          </div>
        </Reveal>
        <div className="w-[500px]">
          <Reveal>
            <h2
              className={` ${staatliches.className} tracking-widest font-bold text-xl mb-3`}
            >
              Track
            </h2>
          </Reveal>
          <Reveal>
            <p className={` ${quicksand.className}`}>
              Stay on top of your job search by saving and organizing your
              favorite listings. Monitor application deadlines and revisit key
              opportunities whenever you need to, ensuring no opportunity slips
              through the cracks.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
export default TripleInfoCards;
