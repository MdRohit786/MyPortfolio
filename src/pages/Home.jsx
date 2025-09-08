import React from "react";
import ThemeToggle from "../component/ThemeToggle";
import StarBackground from "@/component/StarBackground";
import Navbar from "@/component/Navbar"
import HeroSection from "../component/HeroSection";
import AboutMe from "../component/AboutMe";
import SkillsSection from "../component/SkillsSection";
import ProjectSection from "../component/ProjectSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {theme toggle} */}
      <ThemeToggle />
      {/* Background effects */}
      <StarBackground/>
      {/* navbar */}
      <Navbar/>
      {/* main content */}
      <main>
        <HeroSection/>
        <AboutMe/>
        <SkillsSection/>
        <ProjectSection/>
      </main>
      {/* footer */}
    </div>
  );
};

export default Home;
