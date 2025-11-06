import React from "react";
import { motion } from "framer-motion";
import A from "../assets/A.png";
import N from "../assets/N.png";
import I from "../assets/I.png";
import S from "../assets/S.png";
import H from "../assets/H.png";

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
  const letters = [A, N, I, S, H];

  // random delays for letters (0.2s–1.2s range)
  const randomLetterDelays = letters.map(() => 0.2 + Math.random() * 1);

  // random delays for circles (0.5s–2s range)
  const randomCircleDelays = letters.map(() => 0.5 + Math.random() * 1.5);

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
            {/* Circle animation (random delay) */}
            <motion.div
              className="bg-white h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] rounded-full"
              variants={circleVariant}
              custom={randomCircleDelays[index]}
            ></motion.div>

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
