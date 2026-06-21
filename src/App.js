import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMe from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <div id="skills"></div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
