import { IBM_Plex_Mono, Poppins } from "next/font/google";
import { ScrollContainerComponent } from "./ScollContainerComponent";

import { iBM_Plex_Mono, poppins } from "@/app/fonts/Fonts";
import { rubik_Spray_Paint } from "@/app/fonts/Fonts";
import { montserrat } from "@/app/fonts/Fonts";
import { inter } from "@/app/fonts/Fonts";
import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

function HpTitle() {
  return (
    <div className="flex flex-col items-center pt-16 pb-10 bg-grid-white/[0.1]">
      <h1
        className={` ${staatliches.className} text-[#F5EFE7] dark:text-[#ECDFCC] text-[58px] font-semibold`}
      >
        Bring the job market to you
      </h1>
      <h2
        className={`${staatliches.className} text-[#F5EFE7] dark:text-[#ECDFCC] text-[58px] font-semibold text-center`}
      >
        Track every application effortlessly
      </h2>
      <p
        className={` ${quicksand.className} mt-5 text-[#F5EFE7] dark:text-[#ECDFCC]`}
      >
        The new standard for applying and tracking jobs find your dream career
        within minuets
      </p>
      <p
        className={` ${quicksand.className} text-[#F5EFE7] dark:text-[#ECDFCC]`}
      >
        lorum ipsum so lador this is filler replace this with words later dalor
      </p>
      <a href="/register">
        <button className="mt-5 text-[#F6FCDF] p-2 font-medium w-[400px] rounded-md dark:bg-[#3C3D37] bg-[#3E5879]">
          Start for Free
        </button>
      </a>
      <p
        className={` ${quicksand.className} text-[15px] mt-2 text-[#fbfbfb65]`}
      >
        14-day trial, no card required. start in minuets
      </p>
      <ScrollContainerComponent />
    </div>
  );
}
export default HpTitle;
