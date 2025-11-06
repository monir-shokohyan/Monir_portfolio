import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscPreview } from "react-icons/vsc";
import handShake from "../assets/hands-shaka.svg";
import CV from "../assets/Projects-Image/CV.pdf";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const projectsEl = document.getElementById("projects");
    const footerEl = document.getElementById("contact");

    if (!projectsEl || !footerEl) return;

    const lenisContainer =
      document.querySelector("[data-lenis-root]") || window;

    const checkScroll = () => {
      const scrollTop =
        lenisContainer === window ? window.scrollY : lenisContainer.scrollTop;
      const projectsTop = projectsEl.offsetTop;
      const footerTop = footerEl.offsetTop;

      if (
        scrollTop >= projectsTop &&
        scrollTop + window.innerHeight < footerTop
      ) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    lenisContainer.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      lenisContainer.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const handlePreview = () => {
    window.open(CV, "_blank");
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start below and invisible
          animate={{ opacity: 1, y: 0 }} // slide up
          exit={{ opacity: 0, y: 50 }} // slide down on exit
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-xl border border-red-900 w-[300px] h-[100px] bg-black shadow-lg p-2"
        >
          <div
            onClick={handlePreview}
            className="flex justify-between items-center h-full cursor-pointer p-2"
          >
            <div>
              <img src={handShake} alt="Handshake" className="h-[30px]" />
            </div>

            <div className="flex-1 m-2">
              <p className="text-md text-gray-300">
                Here’s my CV <br />
                <span className="text-[12px]">
                  because apparently, LinkedIn isn’t enough
                </span>
              </p>
            </div>

            <div>
              <div className="border border-gray-500 rounded-full p-2 bg-red-900 hover:bg-black transition-all duration-300">
                <VscPreview />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
