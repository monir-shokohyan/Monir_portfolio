import { lazy, Suspense } from "react";
import Hero from "./Hero";
import About from "./About";

// Everything below the fold is split into separate chunks so the first paint
// only needs the Hero/About code. These chunks start downloading right after
// the initial render.
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Services = lazy(() => import("./Services"));
const FollowMe = lazy(() => import("./FollowMe"));
const ContactForm = lazy(() => import("./ContactForm"));
const Footer = lazy(() => import("./Footer"));
const PopUp = lazy(() => import("./PopUp"));

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Hero />
      <About />
      {/* One boundary so all sections mount together (PopUp looks up #projects and #contact on mount) */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <Projects />
        <Skills />
        <Services />
        <FollowMe />
        <ContactForm/>
        <Footer />
        <PopUp/>
      </Suspense>
    </div>
  );
};

export default Home;
