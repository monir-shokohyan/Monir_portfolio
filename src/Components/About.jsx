import React, { useEffect, useState } from "react";
import thumbsup from "../assets/hands-ok.svg";
import twoFingers from "../assets/hands-fingers-revert.svg";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const text =
    "I’m a 25-year-old MERN stack developer who loves turning ideas into sleek, functional web apps. When I’m not deep in code, you’ll probably find me designing cool graphics or sketching detailed graphite art.";
  const text2 =
    "For me, tech and art go hand in hand — I build things that notonly work great but also look great. Whether it’s a full-stack project or a blank sheet of paper, I’m all about bringing creativity to life.";

  const [displayedText, setDisplayedText] = useState("");

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    // blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  console.log(displayedText);

  return (
    <div
      id="about"
      className="bg-[#1d1d1d73] flex justify-center mt-10 relative "
    >
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#000]/90 to-transparent pointer-events-none h-[30%]" />

      <div className="w-[85%] flex justify-between items-center self-center gap-6 md:mt-15  relative z-10">
        {/* Left image */}
        <div>
          <img
            src={twoFingers}
            alt=""
            className="invert h-[180px] mb-20 pr-4"
          />
        </div>

        {/* About content */}
        <div className="md:text-left">
          <h1 className="font-semibold text-xl">AS I SAY HERE</h1>
          <div className="bg-[#2c2c2c] rounded-xl shadow-lg w-full max-w-[750px] border border-gray-700 overflow-hidden">
            
            <div className="flex items-center gap-2 px-3 py-2 bg-[#3a3a3a] border-b border-gray-700">
              <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
            </div>

            
            <div className="p-4 font-mono text-gray-100 text-sm leading-relaxed h-[200px] md:h-[130px] overflow-y-auto whitespace-pre-wrap bg-black">
              {displayedText}
              <span
                style={{
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                |
              </span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div>
          <img src={thumbsup} alt="" className="invert h-[180px] mt-20" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000]/90 to-transparent pointer-events-none h-[30%]" />
    </div>
  );
};

export default About;
