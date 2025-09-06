import React from "react";
import ThemeToggle from "../component/ThemeToggle";
import StarBackground from "@/component/StarBackground";
import Navbar from "@/component/Navbar"
import HeroSection from "../component/HeroSection";

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
      </main>
      {/* footer */}
    </div>
  );
};

export default Home;
