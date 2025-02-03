import { IBM_Plex_Mono, Poppins } from "next/font/google";
import { ScrollContainerComponent } from "./ScollContainerComponent";

import { iBM_Plex_Mono, poppins } from "@/app/fonts/Fonts";
import { rubik_Spray_Paint } from "@/app/fonts/Fonts";
import { montserrat } from "@/app/fonts/Fonts";
import { inter } from "@/app/fonts/Fonts";
import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

import { Reveal } from "@/app/helper components/Reveal";
import { motion } from "framer-motion";

function HpTitle() {
  return (
    <div className="flex flex-col items-center pt-16 pb-10 bg-grid-white/[0.1]">
      <Reveal animationType="slide">
        <h1
          className={` ${staatliches.className} text-[#F5EFE7] dark:text-[#ECDFCC] text-[58px] font-semibold`}
        >
          Bring the job market to you
        </h1>
      </Reveal>
      <Reveal animationType="slide2">
        <h2
          className={`${staatliches.className} text-[#F5EFE7] dark:text-[#ECDFCC] text-[58px] font-semibold text-center`}
        >
          Track every application effortlessly
        </h2>
      </Reveal>
      <Reveal animationType="slide3">
        <p
          className={` ${quicksand.className} mt-5 text-[#F5EFE7] dark:text-[#ECDFCC]`}
        >
          The new standard for applying and tracking jobs find your dream career
          within minuets
        </p>
      </Reveal>
      <Reveal animationType="slide3">
        <p
          className={` ${quicksand.className} text-[#F5EFE7] dark:text-[#ECDFCC]`}
        >
          lorum ipsum so lador this is filler replace this with words later
          dalor
        </p>
      </Reveal>
      <a href="/register" className="relative inline-block mt-5">
        <motion.div
          className="relative text-[#F6FCDF] p-2 font-medium w-[400px] h-[50px] flex items-center justify-center rounded-md dark:bg-[#3C3D37] bg-[#3E5879] overflow-hidden"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
          variants={{ hover: { scale: 1.1 } }}
        >
          {/* Sliding Background */}
          <motion.div
            className="absolute top-0 left-[-100%] w-full h-full bg-[#232420] rounded-md"
            variants={{
              hover: {
                left: 0,
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeOut" },
              },
              default: {
                left: "-100%",
                transition: { duration: 0.3, ease: "easeIn" },
              },
            }}
          />

          {/* Centered Button Text */}
          <span className="relative z-10">Start for Free</span>
        </motion.div>
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
