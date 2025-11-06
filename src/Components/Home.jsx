import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Services from "./Services";
import FollowMe from "./FollowMe";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import PopUp from "./PopUp";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <FollowMe />
      <ContactForm/>
      <Footer />
      <PopUp/>
    </div>
  );
};

export default Home;
