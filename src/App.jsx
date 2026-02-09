import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import NavBar from "./components/Navbar";

function App() {

  return (
    <div className="">
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
