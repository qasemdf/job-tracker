"use client";

import { motion } from "framer-motion";

import { GridComponent } from "../components/ui/GridComponent";

import { TestComponent } from "../components/ui/test";

import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

import { Reveal } from "../helper components/Reveal";

function About() {
  return (
    <div className="flex flex-col items-center w-full pt-20 dark:text-[#ECDFCC] text-[#F5EFE7]">
      <section className="w-full bg-grid-white/[0.1] dark:bg-[#1E201E] bg-[#213555]">
        <h1
          className={` ${staatliches.className} text-[50px] mb-36 mt-14 text-center`}
        >
          made by two very passionate developers
        </h1>
        <div className="flex justify-center gap-10 w-full">
          <TestComponent
            title="Rango - Frontend Developer"
            pfp="/RangoPc.png"
            desc='"I got into coding out of curiosity, and it quickly became a passion. I love solving problems, building projects, and constantly learning new things. For me, coding is a creative way to bring ideas to life."'
          />
          <TestComponent
            title="Dean - FullStack Developer"
            pfp="/dean.pfp"
            desc="lorum ipsum dolar solar blah blah mag mah asd kasod a0sd0asidjas oasdjasd ouiasjd aosdijasdfog osijgosdgi aojso dasdo ijasdasdoidj asdoijasdoijasd oijasdoijasd oijasdoijd asoidjs doiajd oijd aoisdjasdioj asd oijd"
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex gap-10 mt-44">
            <div>
              <Reveal>
                <h1
                  className={` ${staatliches.className} text-[35px] text-center pb-8`}
                >
                  The Journey Behind How This Project Began
                </h1>
              </Reveal>
              <div className="w-[840px]">
                <Reveal>
                  <p
                    className={` ${quicksand.className} text-[25px] text-wrap`}
                  >
                    After connecting on Reddit over a shared interest in solving
                    real-world problems, we teamed up to create a job search app
                    designed to help users track and manage their job
                    applications efficiently. Combining our skills and ideas, we
                    embarked on this journey to build a tool that simplifies the
                    job-hunting process.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center mt-36 p-5 gap-24">
            <Reveal>
              <motion.div
                className="container flex flex-col items-center space-x-4 p-4 rounded-lg bg-[#FF5700] text-white"
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-2">
                  The initial Post on Reddit
                </h3>
                <p>
                  "Hey! Looking for someone to code with and share ideas. Let’s
                  build something cool!"
                </p>
                <img
                  src="/PostforRangoandDean.png"
                  alt=""
                  className="rounded-md w-[940px] h-[250px] pr-[12.5px] pt-4 object-fit"
                />
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div
                className="container flex h-96 flex-col items-center space-x-4 p-4 rounded-lg bg-[#0079D3] text-white"
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <h3 className="text-lg font-bold mb-2">The Response</h3>
                <p>
                  "Hey! I saw your post. I’d love to team up and work on
                  something together!"
                </p>
                <img
                  src="/firstmessagev2.png"
                  alt=""
                  className="rounded-lg pr-3 pt-4 w-[940px] h-[250px] object-cover"
                />
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div
                className="container flex h-96 flex-col items-center p-6 rounded-lg bg-[#3E5879] text-white"
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
              >
                <h3 className="text-lg font-bold mb-2">Collaboration Begins</h3>
                <p>
                  Rango and Dean started working together on amazing projects,
                  building skills and forging a great partnership!
                </p>

                <img
                  src="/linear.png"
                  alt=""
                  className="w-[500px] h-[250px] mt-4 rounded-lg"
                />
              </motion.div>
            </Reveal>
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
