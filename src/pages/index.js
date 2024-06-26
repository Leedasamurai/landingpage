import React, { useState } from "react";
import Sidebar from "../components/Navbar/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSections from "../components/InforSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InforSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo} />
      <Services />
      <InfoSections {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
