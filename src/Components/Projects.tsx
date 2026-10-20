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
import TrueBookLaptop from "../assets/Projects-Image/truebook-laptop.webp";
import TrueBookMobile from "../assets/Projects-Image/truebook-mobile.webp";
import RiteChatLaptop from "../assets/Projects-Image/ritechat-laptop.webp";
import RiteChatMobile from "../assets/Projects-Image/ritechat-mobile.webp";
import RiteTaskLaptop from "../assets/Projects-Image/ritetask-laptop.webp";
import RiteTaskMobile from "../assets/Projects-Image/ritetask-mobile.webp";
import RiteEatsLaptop from "../assets/Projects-Image/riteeats-laptop.webp";
import RiteEatsMobile from "../assets/Projects-Image/riteeats-mobile.webp";
import RitePayrollLaptop from "../assets/Projects-Image/ritepayroll-laptop.webp";
import RitePayrollMobile from "../assets/Projects-Image/ritepayroll-mobile.webp";
import RiteBooksExpressLaptop from "../assets/Projects-Image/ritebooksexpress-laptop.webp";
import RiteBooksExpressMobile from "../assets/Projects-Image/ritebooksexpress-mobile.webp";
import LetsGiveAfricaLaptop from "../assets/Projects-Image/letsgiveafrica-laptop.webp";
import LetsGiveAfricaMobile from "../assets/Projects-Image/letsgiveafrica-mobile.webp";

import { FaRegSmileWink } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsRtl } from "../i18n/useRtl";
import { LaptopFrame, PhoneFrame } from "./DeviceFrames";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

type Project = {
  /** Index of this project in `projects.projects` of the translation files */
  key: number;
  link: string;
  tech: string[];
  laptop: string;
  mobile: string;
  /** true when the images are raw screenshots that need a CSS device frame */
  screenshot?: boolean;
};

// Newest work first
const projectData: Project[] = [
  {
    key: 5,
    link: "https://truebook.yusof-shokohyan4.workers.dev/",
    tech: ["React.js", "Vite", "Tailwind CSS", "Styled Components", "Framer Motion", "Axios", "Cloudflare Workers"],
    laptop: TrueBookLaptop,
    mobile: TrueBookMobile,
    screenshot: true,
  },
  {
    key: 6,
    link: "https://ritechatio.netlify.app/",
    tech: ["React.js", "Vite", "Mantine UI", "Styled Components", "SWR", "Socket.IO", "Recharts", "WhatsApp Business API", "Meta APIs"],
    laptop: RiteChatLaptop,
    mobile: RiteChatMobile,
    screenshot: true,
  },
  {
    key: 7,
    link: "https://ritetask.ritebooks.com/dashboard",
    tech: ["React.js", "Vite", "Mantine UI", "Styled Components", "SWR", "Socket.IO", "Leaflet", "Recharts", "Axios"],
    laptop: RiteTaskLaptop,
    mobile: RiteTaskMobile,
    screenshot: true,
  },
  {
    key: 8,
    link: "https://riteeats.com/",
    tech: ["React.js", "Vite", "Mantine UI", "Styled Components", "Framer Motion"],
    laptop: RiteEatsLaptop,
    mobile: RiteEatsMobile,
    screenshot: true,
  },
  {
    key: 9,
    link: "https://ritepayroll.netlify.app/",
    tech: ["React.js", "Vite", "Mantine UI", "Styled Components", "Framer Motion"],
    laptop: RitePayrollLaptop,
    mobile: RitePayrollMobile,
    screenshot: true,
  },
  {
    key: 10,
    link: "https://ritebooks-express.netlify.app/",
    tech: ["React.js", "Vite", "Mantine UI", "Styled Components", "Framer Motion"],
    laptop: RiteBooksExpressLaptop,
    mobile: RiteBooksExpressMobile,
    screenshot: true,
  },
  {
    key: 11,
    link: "https://letsgiveafricadev.netlify.app/",
    tech: ["React.js", "Vite", "Mantine UI", "Styled Components", "SWR", "Leaflet", "Axios"],
    laptop: LetsGiveAfricaLaptop,
    mobile: LetsGiveAfricaMobile,
    screenshot: true,
  },
  {
    key: 2,
    link: "https://lotus.co.ug/",
    tech: ["React.js", "TailwindCSS", "Swiper.js", "GSAP", "mantine UI", "grok ai", "Axios", "TypeScript", "Nodejs", "PostgreSQL"],
    laptop: LotusLaptop,
    mobile: LotusMobile,
  },
  {
    key: 1,
    link: "http://178.157.91.221/ru",
    tech: [
      "Node.js", "MongoDB", "React.js", "Express", "Tailwind CSS", "Motion", "Git",
      "Redux Toolkit", "Formik", "Yup", "TypeScript",
    ],
    laptop: JobLaptop,
    mobile: JobMobile,
  },
  {
    key: 0,
    link: "https://sms2.aliftech.net/admin/#/auth",
    tech: [
      "Node.js", "MongoDB", "React.js", "Express", "Tailwind CSS", "Motion", "Git",
      "Mantine UI", "Charts.js", "Redux Toolkit", "Formik", "Yup", "Axios", "JWT", "TypeScript",
    ],
    laptop: SmsLaptop,
    mobile: SmsMobile,
  },
  {
    key: 3,
    link: "http://sawda.vercel.app/",
    tech: ["React.js", "OpenWeather API", "TailwindCSS", "Axios"],
    laptop: SawdaLaptop,
    mobile: SawdaMobile,
  },
  {
    key: 4,
    link: "https://online-shop-shkn.vercel.app/",
    tech: ["React.js", "TailwindCSS", "Firebase", "GSAP"],
    laptop: Shoplaptop,
    mobile: ShopMobile,
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const {isRTL} = useIsRtl();

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
        {projectData.map((project, index) => {
          const title = t(`projects.projects.${project.key}.title`);
          const points = t(`projects.projects.${project.key}.points`, { returnObjects: true }) as string[];
          const reverse = index % 2 === 1;
          const mobileClasses = `h-[160px] bottom-0 ${reverse ? "right-0" : "left-0"} lg:h-[250px] absolute lg:static`;

          return (
            <motion.div
              key={project.link}
              className={`
                flex flex-col
                ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
                gap-6 items-center mb-20 w-full rounded-2xl p-2
                md:p-0 border border-[#99000080] md:border-none
              `}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Images */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 w-full md:w-1/2 justify-center items-center relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                {project.screenshot ? (
                  <>
                    <LaptopFrame src={project.laptop} alt={`${title} Laptop`} className="max-w-full" />
                    <PhoneFrame src={project.mobile} alt={`${title} Mobile`} className={mobileClasses} />
                  </>
                ) : (
                  <>
                    <img
                      src={project.laptop}
                      alt={`${title} Laptop`}
                      loading="lazy"
                      decoding="async"
                      className="h-[250px]"
                    />
                    <img
                      src={project.mobile}
                      alt={`${title} Mobile`}
                      loading="lazy"
                      decoding="async"
                      className={mobileClasses}
                    />
                  </>
                )}
              </a>

              {/* Number */}
              <h1 className={`text-6xl font-bold text-red-700 ${isRTL ? "ml-4" : "mr-4"} self-start md:self-auto`}>
                {index + 1}
              </h1>

              {/* Text Section */}
              <div
                className={`
                  w-full md:w-1/2 mt-6 md:mt-0
                  ${reverse ? "md:pr-10" : "md:pl-10"}
                  ${isRTL ? "text-right" : "text-left"}
                `}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300 inline-flex items-center gap-2"
                >
                  {title}
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
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
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
                  {points.map((point, i) => (
                    <li key={i} className="text-gray-400 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimatePresence>
  );
};

export default Projects;
