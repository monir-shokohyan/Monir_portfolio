import JobLaptop from "../assets/Projects-Image/job-laptop.webp";
import JobMobile from "../assets/Projects-Image/job-mobile.webp";
import LotusLaptop from "../assets/Projects-Image/lotus-laptop.webp";
import LotusMobile from "../assets/Projects-Image/lotus-mobile.webp";
import SawdaLaptop from "../assets/Projects-Image/sawda-laptop.webp";
import SawdaMobile from "../assets/Projects-Image/sawda-mobile.webp";
import Shoplaptop from "../assets/Projects-Image/shop-laptop.webp";
import ShopMobile from "../assets/Projects-Image/shop-mobile.webp";
import SmsLaptop from "../assets/Projects-Image/sms-laptop.webp";
import SmsMobile from "../assets/Projects-Image/sms-mobile.webp";

import { FaRegSmileWink } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

// Project data array
const projectData = [
  {
    id: 1,
    title: "Sms-center (sms marketing platform)",
    link: "https://sms2.aliftech.net/admin/#/auth",
    tech: [
      "Node.js",
      "MongoDB",
      "React.js",
      "Express",
      "Tailwind CSS",
      "Motion",
      "Git",
      "Mantine UI",
      "Charts.js",
      "Redux Toolkit",
      "Formik",
      "Yup",
      "Axios",
      "JWT",
      "TypeScript",
    ],
    points: [
      "Reduced page reload time to <350ms with optimized React.js and state management",
      "Built responsive UI and features (chat, requests, profiles, premium plans)",
      "Helps professionals connect, collaborate, and grow their network",
      "Deployed on Compute Engine with CI/CD for seamless updates",
    ],
    layout: "normal",
    laptop: SmsLaptop,
    mobile: SmsMobile,
  },
  {
    id: 2,
    title: "Job platform (Job portal website)",
    link: "http://178.157.91.221/ru",
    tech: [
      "Node.js",
      "MongoDB",
      "React.js",
      "Express",
      "Tailwind CSS",
      "Motion",
      "Git",
      "Redux Toolkit",
      "Formik",
      "Yup", 
      "TypeScript",
    ],
    points: [
      "Built a dynamic MERN application showcasing job listings.",
      "Created Resume creation option.",
      "Developed admin dashboard to manage jobs and resumes.",
      "Optimized page load under 300ms for fast performance",
    ],
    layout: "reverse",
    laptop: JobLaptop,
    mobile: JobMobile,
  },
  {
    id: 3,
    title: "Lotus Software ltd (Corporate Website)",
    link: "https://lotus-soft-ltd.netlify.app/",
    tech: ["React.js", "TailwindCSS", "Swiper.js", "GSAP", "mantine UI", "grok ai"],
    points: [
      "Responsive Lotus Software limited website",
      "Interactive sliders with Swiper.js",
      "Animations powered by GSAP",
      "Chatbot integration using Grok AI",
    ],
    layout: "normal",
    laptop: LotusLaptop,
    mobile: LotusMobile,
  },
  {
    id: 4,
    title: "Sawda (E-commerce Website)",
    link: "http://sawda.vercel.app/",
    tech: ["React.js", "OpenWeather API", "TailwindCSS", "Axios"],
    points: [
      "Responsive e-commerce website",
      "Personalized user experience",
      "e-Commerce functionalities",
      "Clean UI with responsive design",
    ],
    layout: "reverse",
    laptop: SawdaLaptop,
    mobile: SawdaMobile,
  },

  {
    id: 5,
    title: "Online Shop (E-commerce Website)",
    link: "https://online-shop-shkn.vercel.app/",
    tech: ["React.js", "TailwindCSS", "Firebase", "GSAP"],
    points: [
      "Contact management app with CRUD operations",
      "Used Firebase for database and GSAP for animations",
      "Implemented responsive design with TailwindCSS",
      "Deployed on Vercel for easy access",
    ],
    layout: "normal",
    laptop: Shoplaptop,
    mobile: ShopMobile,
  },
];

const Projects = () => {
  return (
    <AnimatePresence mode="wait">
      <div
        id="projects"
        className="max-w-[90%] flex flex-col items-center self-center relative px-4 mt-25 "
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="text-4xl md:text-7xl font-bold text-nowrap">
            [ SELECTED WORKS ]
          </h2>
          <p className="text-red-900 flex flex-col md:flex-row items-center gap-4 text-center text-xl">
            Yes, I actually made these… and they work (most of the time)
            <FaRegSmileWink />
          </p>
        </div>

        {/* Project Cards */}
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col ${
              project.layout === "reverse"
                ? "md:flex-row-reverse"
                : "md:flex-row"
            } gap-6 items-center mb-20 relative border border-[#99000080] md:border-none w-full rounded-2xl p-2 md:p-0 `}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            {/* Images */}
            <a
              href={project.link}
              target="new"
              className="flex gap-4 w-full md:w-1/2 justify-center relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <img
                src={project.laptop}
                alt={`${project.title} Laptop`}
                className={`h-[250px] ${
                  !project.mobile ? "object-contain" : ""
                }`}
              />
              {project.mobile && (
                <img
                  src={project.mobile}
                  alt={`${project.title} Mobile`}
                  className={`h-[160px] bottom-0 ${
                    project.layout === "reverse" ? "right-0" : "left-0"
                  } lg:h-[250px] absolute lg:static`}
                />
              )}
            </a>

            {/* Number */}
            <h1 className="text-6xl font-bold text-red-700 ">{project.id}</h1>

            {/* Text Section */}
            <div
              className={`w-full md:w-1/2 mt-6 md:mt-0 ${
                project.layout === "reverse" ? "md:pr-10" : "md:pl-10"
              } relative`}
            >
              <a
                href={project.link}
                target="new"
                className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300"
              >
                {project.title}
                <span>
                  <CiLink size={30} color="blue" />
                </span>
              </a>

              {/* Tech Stack */}
              <p className="text-sm mt-2 text-gray-400 font-medium flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="border border-red-800 px-2 py-1 rounded-full text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </p>

              {/* Points */}
              <ul className="list-disc ml-5 mt-2 text-gray-400">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Projects;
