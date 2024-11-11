import { motion } from "framer-motion";

export const TestComponent = () => (
  <motion.div
    className="w-full max-w-[620px] h-96 rounded-lg bg-white"
    initial={{ opacity: 0, translateY: 40 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.8 }}
  />
);
