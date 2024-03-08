import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const getUserMode = () => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if(mediaQuery.matches) {
      setDarkMode(true); 
    } else {
      setDarkMode(false);
    }
  }

  useEffect(() => {
    getUserMode();
  }, []);

  return (
    <div
    className={`relative box-border min-h-[100vh] w-[100%] ${darkMode ? "bg-[#191919]" : "bg-[#fff]"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <TechStack darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
