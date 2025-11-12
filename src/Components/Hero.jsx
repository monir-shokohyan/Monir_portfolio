import heyImage from "../assets/hey.webp";
import { HiOutlineArrowDown } from "react-icons/hi";
import CV from "../assets/Projects-Image/CV.pdf"; 
import { useTranslation } from "react-i18next";



const Hero = () => {
  const handlePreview = () => {
      window.open(CV, "_blank");
    };
  const {t} = useTranslation()
  return (
    <div id="hero" className="pt-10 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00011D]/90 to-transparent pointer-events-none  h-[30%] "></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center  p-8">
        <div className="m-10 relative ">
          <img src={heyImage} alt="" className="h-40 md:h-40  object-cover " />
        </div>

        <div  className="hero-heading text-[28px]  md:text-5xl text-gray-400 font-extrabold text-center relative">
          <h1>
            {t('hero.greeting')}
            <span className="parallelogram  rounded-md px-4">{t('hero.webDesigner')}</span>
            <br /> {t('hero.and')}
            <span className="parallelogram2  px-4 rounded-md">{t('hero.illustrator')}</span>
            <br /> {t('hero.inMind')}
            <span className="parallelogram  px-4 rounded-md ">{t('hero.cta')}</span>
          </h1>
        </div>

        {/* Download CV Button */}
        <button
          onClick={handlePreview}
          className="flex items-center gap-6 border border-gray-500 hover:bg-gray-800 transition-all duration-300 rounded-full cursor-pointer mt-8 pl-6 px-2 py-2 shadow-2xl shadow-red-600"
        >{t('hero.downloadCv')}<span className="border border-gray-500 rounded-full p-2 bg-gray-800 hover:bg-black transition-all duration-300">
            <HiOutlineArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
