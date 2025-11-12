import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsRtl } from "../i18n/useRtl";

// Parent container: controls stagger
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between children
    },
  },
};

// Child fade in
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const FollowMe = () => {
  const { t } = useTranslation()
  const { isRTL } = useIsRtl()
  return (
    <div>
      <div className="section4 flex pt-[2px]">
        {/* GitHub */}
        <motion.div
          className="gradient-border flex flex-col items-center justify-center w-1/2 h-[450px] bg-black bg-gradient-to-tr from-[#000000] to-[#36363662]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="p-4 flex flex-col" dir={isRTL ? "rtl" : "ltr"}> 
            <div className="mb-4">
              <FaGithub size={35} />
            </div>
            <motion.h1
              className="text-lg font-semibold text-white"
              variants={fadeIn}
            >
              {t("followMe.github.title")}
            </motion.h1>
            <motion.p className="text-gray-400 mt-2 text-sm" variants={fadeIn}>
              {t("followMe.github.desc")}
            </motion.p>
            <motion.a
              href="https://github.com/monir-shokohyan?tab=repositories"
              className="border rounded-full border-[#99000080] px-2 mt-4 shadow-lg hover:shadow-[#99000080] hover:scale-110 transition-all duration-300 mr-auto cursor-pointer"
              variants={fadeIn}
            >
              <h1 className="bg-black rounded-4xl w-20 py-2 text-center">
                {t("followMe.github.cta")}
              </h1>
            </motion.a>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          className="flex flex-col items-center justify-center w-1/2 h-[450px] bg-black bg-gradient-to-br from-[#36363662] to-[#000000]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="p-4 flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
            <div className="mb-4">
              <FaLinkedin size={35} />
            </div>
            <motion.h1
              className="text-lg font-semibold text-white"
              variants={fadeIn}
            >
              {t("followMe.linkedin.title")}
            </motion.h1>
            <motion.p className="text-gray-400 mt-2 text-sm" variants={fadeIn}>
              {t("followMe.linkedin.desc")}
            </motion.p>
            <motion.a
              href="https://www.linkedin.com/in/monir-shokohyan/"
              className="border rounded-full border-[#99000080] px-2 mt-4 shadow-lg hover:shadow-[#99000080] hover:scale-110 transition-all duration-300 mr-auto cursor-pointer"
              variants={fadeIn}
            >
              <h1 className="bg-black rounded-4xl w-20 py-2 text-center">
                {t("followMe.linkedin.cta")}
              </h1>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FollowMe;
