
import React from 'react';
import { HashRouter, Routes, Route} from "react-router-dom";
import Home     from "./pages/Home";
import About   from "./pages/About";
import Projects from "./pages/Projects";
// import Arcade   from "./pages/Arcade";
import Navbar from './sections/Navbar';




function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/arcade"  element={<Arcade/>} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;