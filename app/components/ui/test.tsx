import { motion } from "framer-motion";

export const TestComponent = (props) => (
  <motion.div
    className="container flex flex-col justify-between max-w-[620px] h-96 rounded-lg dark:bg-[#3C3D37] bg-[#3E5879]"
    initial={{ opacity: 0, translateY: 40 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex p-3 items-center">
      <img
        src={props.pfp}
        alt="a image that represents the developer who worked on this project"
        className="w-44 mr-12"
      />
      <h1 className="text-[25px]">{props.title}</h1>
    </div>
    <div className="container flex items-center h-52 bg-[#213555] dark:bg-[#1E201E] p-5">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
        aliquid aut magni, tenetur maiores soluta esse voluptatum nesciunt
        ratione dolorem laudantium fugiat placeat enim eius voluptates rerum
        aliquam quis?
      </p>
    </div>
  </motion.div>
);
