import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

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
          <div className="p-4 flex flex-col">
            <div className="mb-4">
              <FaGithub size={35} />
            </div>
            <motion.h1
              className="text-lg font-semibold text-white"
              variants={fadeIn}
            >
              Follow me on GitHub
            </motion.h1>
            <motion.p className="text-gray-400 mt-2 text-sm" variants={fadeIn}>
              Check out my projects and the code behind them.
            </motion.p>
            <motion.a
              href="https://github.com/1anishraut?tab=repositories"
              className="border rounded-full border-[#99000080] px-2 mt-4 shadow-lg hover:shadow-[#99000080] hover:scale-110 transition-all duration-300 mr-auto cursor-pointer"
              variants={fadeIn}
            >
              <h1 className="bg-black rounded-4xl w-20 py-2 text-center">
                Follow
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
          <div className="p-4 flex flex-col">
            <div className="mb-4">
              <FaLinkedin size={35} />
            </div>
            <motion.h1
              className="text-lg font-semibold text-white"
              variants={fadeIn}
            >
              Connect with me on LinkedIn
            </motion.h1>
            <motion.p className="text-gray-400 mt-2 text-sm" variants={fadeIn}>
              Let’s connect and share ideas in tech & design.
            </motion.p>
            <motion.a
              href="https://www.linkedin.com/in/anish-raut"
              className="border rounded-full border-[#99000080] px-2 mt-4 shadow-lg hover:shadow-[#99000080] hover:scale-110 transition-all duration-300 mr-auto cursor-pointer"
              variants={fadeIn}
            >
              <h1 className="bg-black rounded-4xl w-20 py-2 text-center">
                Connect
              </h1>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FollowMe;
