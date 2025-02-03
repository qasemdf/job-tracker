import { motion } from "framer-motion";

export const TestComponent = (props: any) => (
  <motion.div
    className="container flex flex-col justify-between max-w-[620px] h-96 rounded-lg dark:bg-[#191A19] bg-[#27374D]"
    initial={{ opacity: 0, translateY: 70 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex p-3 items-center">
      <img
        src={props.pfp}
        alt="a image that represents the developer who worked on this project"
        className="w-44 mr-12 rounded-md"
      />
      <h1 className="text-[25px]">{props.title}</h1>
    </div>
    <div className="container flex items-center h-52 bg-[#27374D] dark:bg-[#191A19] p-5">
      <p>{props.desc}</p>
    </div>
  </motion.div>
);
