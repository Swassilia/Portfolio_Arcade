
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home     from "./pages/Home";
import Resume   from "./pages/Resume";
import Projects from "./pages/Projects";
// import Arcade   from "./pages/Arcade";
import Navbar from './sections/Navbar';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>} />
        {/* <Route path="/arcade"  element={<Arcade/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;