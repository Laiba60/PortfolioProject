import React from "react";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <NavBar />

      {/* Sections */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
