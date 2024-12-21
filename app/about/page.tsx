"use client";
import { GridComponent } from "../components/ui/GridComponent";

import { TestComponent } from "../components/ui/test";

import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

function About() {
  return (
    <div className="flex flex-col items-center w-full pt-20 dark:text-[#ECDFCC] text-[#F5EFE7]">
      <section className="w-full bg-grid-white/[0.1] dark:bg-[#1E201E] bg-[#213555]">
        <h1
          className={` ${staatliches.className} text-[45px] mb-36 mt-14 text-center`}
        >
          This was made by two very passionate developers
        </h1>
        <div className="flex justify-center gap-10 w-full">
          <TestComponent />
          <TestComponent />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex gap-10 mt-44">
            <h1 className={` ${staatliches.className} text-[25px]`}>
              The Journey Behind How This Project Began
            </h1>
            <div className="w-[790px]">
              <p className={` ${quicksand.className} text-[25px] text-wrap`}>
                After connecting on Reddit over a shared interest in solving
                real-world problems, we teamed up to create a job search app
                designed to help users track and manage their job applications
                efficiently. Combining our skills and ideas, we embarked on this
                journey to build a tool that simplifies the job-hunting process.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center mt-36 gap-24">
            <div className="w-full max-w-[485px] h-64 mb-14 rounded-lg bg-white"></div>
            <div className="w-full max-w-[485px] h-64 mb-14 rounded-lg bg-white"></div>
            <div className="w-full max-w-[485px] h-64 mb-14 rounded-lg bg-white"></div>
          </div>
        </div>
      </section>
      <section className="w-full h-[1700px] flex flex-col bg-grid-white/[0.1] dark:bg-[#1E201E] bg-[#213555] text-[#F5EFE7] dark:text-[#ECDFCC] pt-10">
        <h2
          className={` ${quicksand.className} text-center text-[rgba(255,255,255, 0.2)]`}
        >
          Our Values
        </h2>
        <h2 className={` ${staatliches.className} text-[49px] text-center`}>
          Our Values are the catalyst for all of our endeavors
        </h2>
        <GridComponent />
      </section>
    </div>
  );
}
export default About;
