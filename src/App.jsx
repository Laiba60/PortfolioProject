import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./container/home/index";
import Skills from "./container/skills";
import Contact from "./container/contact";
import Resume from "./container/resume";
import Portfolio from "./container/portfolio";
import About from "./container/portfolio";


function App() {

  return (
    <div className="p">
      Hello World
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
