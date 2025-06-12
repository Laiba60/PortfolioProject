import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p">
      Hello World
      <NavBar/>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route index="/about" element={<About />} />
        <Route index="/resume" element={<Resume />} />
        <Route index="/skills" element={<Skills />} />
        <Route index="/portfolio" element={<Portfolio />} />
        <Route index="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
