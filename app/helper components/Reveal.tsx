import { useEffect, useRef, useState } from "react";

import { motion, useInView, useAnimation, delay } from "framer-motion";

interface Props {
  children: JSX.Element;
  animationType?: "fade" | "slide" | "left" | "right" | "slide2" | "slide3";
}

export const Reveal = ({ children, animationType = "slide" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  const [currentVariant, setCurrentVariant] = useState("hidden");

  const animationVariants = {
    slide: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.35 },
      },
    },
    slide2: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.65 },
      },
    },
    slide3: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: 0.95 },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 2.9 } },
    },
    left: {
      hidden: { opacity: 0, x: 375 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    right: {
      hidden: { opacity: 0, x: -375 },
      show: { opacity: 1, x: 0, transition: { duration: 1.9 } },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        variants={animationVariants[animationType]}
        initial={currentVariant}
        animate={mainControls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
