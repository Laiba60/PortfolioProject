import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar"; 
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  const [count, setCount] = useState(0);

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
