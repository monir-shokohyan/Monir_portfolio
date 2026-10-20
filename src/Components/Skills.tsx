import bg from "../assets/background.webp";
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
  SiSass,
  SiVite,
  SiRedux,
  SiSwr,
  SiMantine,
  SiAntdesign,
  SiI18Next,
  SiLeaflet,
  SiOpenstreetmap,
  SiExpo,
  SiSocketdotio,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiWhatsapp,
  SiMeta,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiDocker,
  SiLinux,
  SiNginx,
  SiPm2,
  SiVercel,
  SiNetlify,
  SiJest,
  SiPostman,
  SiNotion,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsRtl } from "../i18n/useRtl";
import type { IconType } from "react-icons";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const item: Variants = {
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

type Skill = { Icon: IconType; label: string; hover: string };

const skills: Skill[] = [
  // Frontend
  { Icon: FaHtml5, label: "HTML5", hover: "group-hover:text-orange-600" },
  { Icon: FaCss3Alt, label: "CSS3", hover: "group-hover:text-blue-600" },
  { Icon: SiSass, label: "SCSS", hover: "group-hover:text-pink-500" },
  { Icon: IoLogoJavascript, label: "JavaScript", hover: "group-hover:text-yellow-400" },
  { Icon: SiTypescript, label: "TypeScript", hover: "group-hover:text-blue-500" },
  { Icon: FaReact, label: "React", hover: "group-hover:text-cyan-400" },
  { Icon: RiNextjsFill, label: "Next.js", hover: "group-hover:text-gray-200" },
  { Icon: SiVite, label: "Vite", hover: "group-hover:text-violet-500" },
  { Icon: SiRedux, label: "Redux Toolkit", hover: "group-hover:text-purple-500" },
  { Icon: SiSwr, label: "SWR", hover: "group-hover:text-gray-200" },
  { Icon: SiMantine, label: "Mantine", hover: "group-hover:text-sky-500" },
  { Icon: SiAntdesign, label: "Ant Design", hover: "group-hover:text-blue-500" },
  { Icon: SiTailwindcss, label: "Tailwind", hover: "group-hover:text-sky-400" },
  { Icon: FaBootstrap, label: "Bootstrap 5", hover: "group-hover:text-purple-500" },
  { Icon: SiStyledcomponents, label: "Styled Components", hover: "group-hover:text-pink-400" },
  { Icon: TbBrandFramerMotion, label: "Framer Motion", hover: "group-hover:text-yellow-500" },
  { Icon: SiThreedotjs, label: "Three.js", hover: "group-hover:text-gray-200" },
  { Icon: SiI18Next, label: "i18next", hover: "group-hover:text-teal-400" },
  // Maps
  { Icon: SiLeaflet, label: "Leaflet", hover: "group-hover:text-green-500" },
  { Icon: SiOpenstreetmap, label: "OpenStreetMap", hover: "group-hover:text-lime-400" },
  // Mobile & desktop
  { Icon: TbBrandReactNative, label: "React Native", hover: "group-hover:text-cyan-500" },
  { Icon: SiExpo, label: "Expo", hover: "group-hover:text-gray-200" },
  { Icon: SiElectron, label: "Electron.js", hover: "group-hover:text-blue-400" },
  { Icon: SiTauri, label: "Tauri", hover: "group-hover:text-amber-400" },
  // Backend & databases
  { Icon: FaNodeJs, label: "Node.js", hover: "group-hover:text-green-600" },
  { Icon: SiExpress, label: "Express", hover: "group-hover:text-gray-400" },
  { Icon: SiSocketdotio, label: "Socket.io", hover: "group-hover:text-gray-200" },
  { Icon: SiPrisma, label: "Prisma", hover: "group-hover:text-teal-300" },
  { Icon: SiPostgresql, label: "PostgreSQL", hover: "group-hover:text-blue-500" },
  { Icon: SiMongodb, label: "MongoDB", hover: "group-hover:text-green-500" },
  { Icon: SiFirebase, label: "Firebase", hover: "group-hover:text-amber-500" },
  { Icon: SiSupabase, label: "Supabase", hover: "group-hover:text-emerald-500" },
  // Integrations
  { Icon: SiWhatsapp, label: "WhatsApp API", hover: "group-hover:text-green-500" },
  { Icon: SiMeta, label: "Meta APIs", hover: "group-hover:text-blue-500" },
  // DevOps & tools
  { Icon: SiGit, label: "Git", hover: "group-hover:text-orange-600" },
  { Icon: SiGithubactions, label: "GitHub Actions", hover: "group-hover:text-blue-400" },
  { Icon: SiDocker, label: "Docker", hover: "group-hover:text-sky-500" },
  { Icon: SiLinux, label: "Linux", hover: "group-hover:text-yellow-400" },
  { Icon: SiNginx, label: "nginx", hover: "group-hover:text-green-600" },
  { Icon: SiPm2, label: "PM2", hover: "group-hover:text-indigo-400" },
  { Icon: SiVercel, label: "Vercel", hover: "group-hover:text-gray-200" },
  { Icon: SiNetlify, label: "Netlify", hover: "group-hover:text-teal-400" },
  { Icon: SiJest, label: "Jest", hover: "group-hover:text-red-500" },
  { Icon: SiPostman, label: "Postman", hover: "group-hover:text-orange-500" },
  { Icon: SiNotion, label: "Notion", hover: "group-hover:text-gray-200" },
  // Design
  { Icon: SiFigma, label: "Figma", hover: "group-hover:text-pink-500" },
  { Icon: SiAdobeillustrator, label: "Illustrator", hover: "group-hover:text-orange-500" },
  { Icon: SiAdobephotoshop, label: "Photoshop", hover: "group-hover:text-blue-700" },
  { Icon: SiAdobeaftereffects, label: "After Effects", hover: "group-hover:text-purple-600" },
  { Icon: SiAdobepremierepro, label: "Premiere", hover: "group-hover:text-purple-400" },
];

type SkillCategory = { title: string; items: string[] };

const Skills = () => {
const { t } = useTranslation();
const { isRTL } = useIsRtl()
const categories = t("skills.categories", { returnObjects: true }) as SkillCategory[];
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
        className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8 text-center text-white px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {skills.map(({ Icon, label, hover }) => (
          <motion.div
            key={label}
            variants={item}
            className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <Icon
              className={`text-4xl md:text-5xl text-white transition-colors duration-300 ${hover} group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
            />
            <p className="mt-2 text-xs md:text-sm">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill breakdown by area */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-6xl mt-16"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
            className="border border-[#99000080] rounded-xl p-5 bg-black/60 backdrop-blur-sm hover:shadow-2xl shadow-red-700 transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i % 3}
          >
            <h3 className="text-lg font-bold text-red-700 mb-3">{category.title}</h3>
            <ul dir="ltr" className="space-y-2 list-disc pl-5 text-left text-sm text-gray-400 leading-relaxed">
              {category.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
