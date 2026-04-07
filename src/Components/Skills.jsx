import bg from "../assets/background.png";
import { FaRegSmileWink } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiTauri,
  SiElectron,
  SiTypescript,
  SiStyledcomponents,
  SiThreedotjs,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsRtl } from "../i18n/useRtl";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  const skills = [
    { Icon: FaHtml5, label: "HTML5", hover: "group-hover:text-orange-600" },
    { Icon: FaCss3Alt, label: "CSS3", hover: "group-hover:text-blue-600" },
    { Icon: SiTailwindcss, label: "Tailwind", hover: "group-hover:text-sky-400" },
    { Icon: IoLogoJavascript, label: "JavaScript", hover: "group-hover:text-yellow-400" },
    { Icon: FaReact, label: "React", hover: "group-hover:text-cyan-400" },
    { Icon: TbBrandReactNative, label: "React Native", hover: "group-hover:text-cyan-500" },
    { Icon: RiNextjsFill, label: "Next.js", hover: "group-hover:text-gray-200" },
    { Icon: FaNodeJs, label: "Node.js", hover: "group-hover:text-green-600" },
    { Icon: SiExpress, label: "Express", hover: "group-hover:text-gray-400" },
    { Icon: SiMongodb, label: "MongoDB", hover: "group-hover:text-green-500" },
    { Icon: SiTypescript, label: "TypeScript", hover: "group-hover:text-blue-500" },
    { Icon: SiStyledcomponents, label: "Styled Components", hover: "group-hover:text-pink-400" },
    { Icon: SiAdobeillustrator, label: "Illustrator", hover: "group-hover:text-orange-500" },
    { Icon: SiAdobephotoshop, label: "Photoshop", hover: "group-hover:text-blue-700" },
    { Icon: SiAdobeaftereffects, label: "After Effects", hover: "group-hover:text-purple-600" },
    { Icon: SiAdobepremierepro, label: "Premiere", hover: "group-hover:text-purple-400" },
    { Icon: SiThreedotjs, label: "Three.js", hover: "group-hover:text-gray-200" },
    { Icon: SiTauri, label: "Tauri", hover: "group-hover:text-gray-600" },
    { Icon: SiElectron, label: "Electron.js", hover: "group-hover:text-blue-400" },
    { Icon: TbBrandFramerMotion, label: "Framer Motion", hover: "group-hover:text-yellow-500" },
    { Icon: FaBootstrap, label: "Bootstrap 5", hover: "group-hover:text-purple-500" },
    { Icon: SiPostgresql, label: "PostgreSQL", hover: "group-hover:text-blue-500" },

  ];
const { t } = useTranslation();
const { isRTL } = useIsRtl()
  return (
    <div
      id="skills"
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full min-h-[500px] bg-cover bg-center flex flex-col items-center gap-2 py-15"
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 mb-12 px-2">
        <h2 className="text-4xl md:text-7xl font-bold">{t('skills.title')}</h2>
        <p className="text-red-900 flex flex-col md:flex-row items-center gap-4 text-center text-xl " dir={isRTL ? 'rtl' : 'ltr'}>
          {t('skills.description')}
          <FaRegSmileWink />
        </p>
      </div>

      {/* Icons Grid */}
      <motion.div
        className="grid grid-cols-3 md:grid-cols-5 gap-8 text-center text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map(({ Icon, label, hover }, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <Icon
              className={`text-4xl md:text-6xl text-white transition-colors duration-300 ${hover} group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
            />
            <p className="mt-2 text-sm md:text-base">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
