import React from "react";
import { motion } from "framer-motion";
import R from "../assets/R.png";
import N from "../assets/N.png";
import I from "../assets/I.png";
import M from "../assets/M.png";
import O from "../assets/O.png";

// parent container → no stagger (we’ll control timing with random delays)
const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

// letter variant → rise from bottom with random delay
const letterVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.4, ease: "easeOut" },
  }),
};

// circle variant → fall from top with random delay
const circleVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay, // random delay passed
      type: "spring",
      stiffness: 300,
      damping: 12,
    },
  }),
};

const Footer = () => {
  const letters = [M,O,N,I,R];

  // random delays for letters (0.2s–1.2s range)
  const randomLetterDelays = letters.map(() => 0.2 + Math.random() * 1);


  return (
    <div id="footer">
      <motion.div
        className="flex items-start gap-2 justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {letters.map((letter, index) => (
          <motion.div key={index} className="flex flex-col items-center gap-4">
            {/* Letter animation (random delay) */}
            <motion.img
              src={letter}
              alt=""
              className="h-[80px] lg:h-[200px]"
              variants={letterVariant}
              custom={randomLetterDelays[index]}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Footer;
