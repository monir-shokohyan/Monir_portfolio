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
import {motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsRtl } from "../i18n/useRtl";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const Projects = () => {
  const { t } = useTranslation();
  const {isRTL} = useIsRtl();

  const projectData = [
    {
      id: 1,
      title: t("projects.projects.2.title"),
      link: "https://lotus.co.ug/",
      tech: ["React.js", "TailwindCSS", "Swiper.js", "GSAP", "mantine UI", "grok ai", "Axios", "TypeScript", "Nodejs", "PostgreSQL"],
      points: t("projects.projects.2.points", { returnObjects: true }),
      layout: "normal",
      laptop: LotusLaptop,
      mobile: LotusMobile,
    },
    {
      id: 2,
      title: t("projects.projects.1.title"),
      link: "http://178.157.91.221/ru",
      tech: [
        "Node.js", "MongoDB", "React.js", "Express", "Tailwind CSS", "Motion", "Git",
        "Redux Toolkit", "Formik", "Yup", "TypeScript",
      ],
      points: t("projects.projects.1.points", { returnObjects: true }),
      layout: "reverse",
      laptop: JobLaptop,
      mobile: JobMobile,
    },
    {
      id: 3,
      title: t("projects.projects.0.title"),
      link: "https://sms2.aliftech.net/admin/#/auth",
      tech: [
        "Node.js", "MongoDB", "React.js", "Express", "Tailwind CSS", "Motion", "Git",
        "Mantine UI", "Charts.js", "Redux Toolkit", "Formik", "Yup", "Axios", "JWT", "TypeScript",
      ],
      points: t("projects.projects.0.points", { returnObjects: true }),
      layout: "normal",
      laptop: SmsLaptop,
      mobile: SmsMobile,
    },
    {
      id: 4,
      title: t("projects.projects.3.title"),
      link: "http://sawda.vercel.app/",
      tech: ["React.js", "OpenWeather API", "TailwindCSS", "Axios"],
      points: t("projects.projects.3.points", { returnObjects: true }),
      layout: "reverse",
      laptop: SawdaLaptop,
      mobile: SawdaMobile,
    },
    {
      id: 5,
      title: t("projects.projects.4.title"),
      link: "https://online-shop-shkn.vercel.app/",
      tech: ["React.js", "TailwindCSS", "Firebase", "GSAP"],
      points: t("projects.projects.4.points", { returnObjects: true }),
      layout: "normal",
      laptop: Shoplaptop,
      mobile: ShopMobile,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <div
        id="projects"
        className="max-w-[90%] flex flex-col items-center self-center relative px-4 mt-25"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-nowrap">
            {t("projects.title")}
          </h2>
          <p className="text-red-900 flex flex-col md:flex-row items-center justify-center gap-4 text-xl">
            {t("projects.description")}
            <FaRegSmileWink />
          </p>
        </div>

        {/* Project Cards */}
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className={`
              flex flex-col
              ${project.layout === "reverse" ? "md:flex-row-reverse" : "md:flex-row"}
              gap-6 items-center mb-20 w-full rounded-2xl p-2
              md:p-0 border border-[#99000080] md:border-none
            `}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            {/* Images */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 w-full md:w-1/2 justify-center relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <img
                src={project.laptop}
                alt={`${project.title} Laptop`}
                className={`h-[250px] ${!project.mobile ? "object-contain" : ""}`}
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
            <h1 className={`text-6xl font-bold text-red-700 ${isRTL ? "ml-4" : "mr-4"} self-start md:self-auto`}>
              {project.id}
            </h1>

            {/* Text Section */}
            <div
              className={`
                w-full md:w-1/2 mt-6 md:mt-0
                ${project.layout === "reverse" ? "md:pr-10" : "md:pl-10"}
                ${isRTL ? "text-right" : "text-left"}
              `}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300 inline-flex items-center gap-2"
              >
                {project.title}
                <CiLink size={30} className={isRTL ? "mr-2" : "ml-2"} />
              </a>

              {/* Tech Stack */}
              <div
                dir={isRTL ? "rtl" : "ltr"}
                className={`
                  text-sm mt-2 text-gray-400 font-medium
                  flex flex-wrap gap-2
                `}
              >
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      border border-red-800 
                      px-2 py-1 rounded-full text-gray-400
                      inline-block
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Points */}
              <ul className={`mt-4 space-y-2 ${isRTL ? "pr-6 list-disc" : "pl-6 list-disc"}`}>
                {project.points.map((point, i) => (
                  <li key={i} className="text-gray-400 leading-relaxed">
                    {point}
                  </li>
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