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
    <div className="relative bg-gray-900">
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
