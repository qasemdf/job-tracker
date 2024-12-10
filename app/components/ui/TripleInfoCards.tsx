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
          Lorem ipsum dolor sit amet consectetur adipisicing fugit recusandae
          corrupti dignissimos?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            nobis incidunt quis fugiat sequi ut fugit recusandae corrupti
            dignissimos?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            nobis incidunt quis fugiat sequi ut fugit recusandae corrupti
            dignissimos?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            nobis incidunt quis fugiat sequi ut fugit recusandae corrupti
            dignissimos
          </p>
        </div>
      </div>
    </div>
  );
}
export default TripleInfoCards;
